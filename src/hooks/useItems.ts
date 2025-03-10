import {useState, useMemo, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {GET_ITEMS} from '@/graphql/queries';
import {GetLesons, Lesson} from '@/graphql/types';
import {useNotifications} from 'react-native-notificated';

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
  const {notify} = useNotifications();
  const {loading, error, data} = useQuery<GetLesons>(GET_ITEMS);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const filteredItems = useMemo(() => {
    if (!data?.items) return [];
    if (!filterCategoryId) return data.items;
    return data.items.filter(item => item.category.id === filterCategoryId);
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

  useEffect(() => {
    if (error) {
      notify('error', {
        params: {
          title: 'Error',
          description: 'Error loading items',
        },
      });
    }
  }, [error]);

  return {
    items: paginatedItems,
    loading: loading,
    loadingMore,
    error,
    loadMore,
    hasMore,
  };
};
