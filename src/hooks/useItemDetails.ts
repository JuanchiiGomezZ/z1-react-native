import {useQuery} from '@apollo/client';
import {GET_ITEMS_DETAILS} from '@/graphql/queries';
import {GetLessonDetails, LessonDetails} from '@/graphql/types';
import {useMemo} from 'react';

export type UseItemResult = {
  item: LessonDetails | undefined;
  loading: boolean;
  error: Error | undefined;
};

export const useItemDetails = (id: string): UseItemResult => {
  const {loading, error, data} = useQuery<GetLessonDetails>(GET_ITEMS_DETAILS);

  const item = useMemo(() => {
    return data?.items.find(item => item.id === id);
  }, [data, id]);

  return {
    item,
    loading,
    error,
  };
};
