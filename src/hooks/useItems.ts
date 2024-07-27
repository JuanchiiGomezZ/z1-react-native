import {useState, useEffect, useMemo} from 'react';
import {useQuery} from '@apollo/client';
import {GET_ITEMS} from '@/graphql/queries';
import {GetItemsData, Item} from '@/graphql/types';

const ITEMS_PER_PAGE = 10;

export type UseItemsResult = {
  items: Item[];
  loading: boolean;
  error: Error | undefined;
  loadMore: () => void;
  hasMore: boolean;
};

type useItemsProps = {
  filterCategoryId: string;
  itemsPerPage?: number;
};

export const useItems = ({
  filterCategoryId,
  itemsPerPage,
}: useItemsProps): UseItemsResult => {
  const {loading, error, data} = useQuery<GetItemsData>(GET_ITEMS);
  const [page, setPage] = useState(1);

  const filteredItems = useMemo(() => {
    if (!data?.items) return [];
    if (!filterCategoryId) return data.items;
    return data.items.filter(item => item.category.id === filterCategoryId);
  }, [data, filterCategoryId]);

  const paginatedItems = useMemo(() => {
    return filteredItems.slice(0, page * (itemsPerPage || ITEMS_PER_PAGE));
  }, [filteredItems, page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const hasMore = paginatedItems.length < filteredItems.length;

  return {
    items: paginatedItems,
    loading,
    error,
    loadMore,
    hasMore,
  };
};
