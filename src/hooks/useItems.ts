import {useQuery} from '@apollo/client';
import {GET_ITEMS} from '../graphql/queries';
import {GetItemsData} from '../graphql/types';

export const useItems = () => {
  const {loading, error, data} = useQuery<GetItemsData>(GET_ITEMS);

  return {
    items: data?.items || [],
    loading,
    error,
  };
};
