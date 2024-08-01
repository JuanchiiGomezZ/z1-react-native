import {useQuery} from '@apollo/client';
import {GET_ITEMS_DETAILS} from '@/graphql/queries';
import {GetLessonDetails, LessonDetails} from '@/graphql/types';
import {useEffect, useMemo} from 'react';
import {useNotifications} from 'react-native-notificated';

export type UseItemResult = {
  item: LessonDetails | undefined;
  loading: boolean;
  error: Error | undefined;
};

export const useItemDetails = (id: string): UseItemResult => {
  const {notify} = useNotifications();
  const {loading, error, data} = useQuery<GetLessonDetails>(GET_ITEMS_DETAILS);

  const item = useMemo(() => {
    return data?.items.find(item => item.id === id);
  }, [data, id]);

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
    item,
    loading,
    error,
  };
};
