import {useState, useEffect, useMemo} from 'react';
import {useQuery} from '@apollo/client';
import {GET_ITEMS} from '@/graphql/queries';
import {GetItemsData, Item} from '@/graphql/types';

type UseItemsResult = {
  items: Item[];
  loading: boolean;
  error: Error | undefined;
};

export const useItems = (filterCategoryId: string): UseItemsResult => {
  const {loading, error, data} = useQuery<GetItemsData>(GET_ITEMS);

  const filteredItems = useMemo(() => {
    if (!data?.items) return [];
    if (!filterCategoryId) return data.items;
    return data.items.filter(item => item.category.id === filterCategoryId);
  }, [data, filterCategoryId]);

  return {
    items: filteredItems,
    loading,
    error,
  };
};
