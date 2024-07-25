import {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {GET_ITEMS} from '../graphql/queries';
import {GetItemsData, Item} from '../graphql/types';

export const useItems = (filterCategoryId: string) => {
  const {loading, error, data} = useQuery<GetItemsData>(GET_ITEMS);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  useEffect(() => {
    if (data?.items) {
      if (filterCategoryId) {
        setFilteredItems(
          data.items.filter(item => item.category.id === filterCategoryId),
        );
      } else {
        setFilteredItems(data.items);
      }
    }
  }, [data, filterCategoryId]);

  return {
    items: filteredItems,
    loading,
    error,
  };
};
