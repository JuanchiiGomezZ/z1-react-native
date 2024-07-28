import {useState, useMemo} from 'react';
import {useQuery} from '@apollo/client';
import {GET_ITEMS} from '@/graphql/queries';
import {GetLesons, Lesson} from '@/graphql/types';

export type UseItemsResult = {
  items: Lesson[];
  loading: boolean;
  error: Error | undefined;
  loadMore: () => void;
  hasMore: boolean;
  loadingMore: boolean;
};

type useItemsProps = {
  filterCategoryId: string;
  itemsPerPage?: number;
};

export const useItems = ({
  filterCategoryId,
  itemsPerPage = 10,
}: useItemsProps): UseItemsResult => {
  const {loading, error, data} = useQuery<GetLesons>(GET_ITEMS);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const filteredItems = useMemo(() => {
    if (!data?.lesons) return [];
    if (!filterCategoryId) return data.lesons;
    return data.lesons.filter(item => item.category.id === filterCategoryId);
  }, [data, filterCategoryId]);

  const paginatedItems = useMemo(() => {
    return filteredItems.slice(0, page * itemsPerPage);
  }, [filteredItems, page]);

  const loadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setPage(prevPage => prevPage + 1);
      setLoadingMore(false);
    }, 1000); // Simulate network request
  };

  const hasMore = paginatedItems.length < filteredItems.length;

  return {
    items: paginatedItems,
    loading: loading,
    loadingMore,
    error,
    loadMore,
    hasMore,
  };
};
