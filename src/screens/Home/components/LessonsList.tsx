import React, {useCallback} from 'react';
import {Lesson} from '@/graphql/types';
import LessonCard from '@/components/Card/LessonCard';
import {useTheme} from 'styled-components/native';
import LessonsSkeleton from './LessonsSkeleton';
import useNavigation from '@/hooks/useNavigation';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {ANIMATION_DURATION} from '@/constants';
import {UseItemsResult} from '@/hooks/useItems';
import useDebounce from '@/hooks/useDebounce';
import {FlatList} from 'react-native';
import Footer from '@/components/Footer';

type ItemsListProps = UseItemsResult & {
  flatListRef?: React.RefObject<FlatList>;
};

const LessonsList = ({
  items,
  loading,
  hasMore,
  loadMore,
  loadingMore,
  flatListRef,
}: ItemsListProps) => {
  const {spacing} = useTheme();
  const navigation = useNavigation();

  const handleEndReached = useDebounce(() => {
    if (hasMore && !loading) {
      loadMore();
    }
  }, 500);

  const handleItemPress = useCallback(
    (item: Lesson) => {
      navigation.navigate('Details', item);
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}: {item: Lesson}) => (
      <LessonCard {...item} onPress={() => handleItemPress(item)} />
    ),
    [],
  );

  return (
    <Animated.FlatList
      data={items}
      keyExtractor={(item: Lesson) => item.id}
      renderItem={renderItem}
      numColumns={2}
      contentContainerStyle={{
        gap: spacing.md,
        paddingHorizontal: spacing.lg,
        paddingBottom: spacing.xxxl,
      }}
      columnWrapperStyle={{
        gap: spacing.md,
      }}
      maxToRenderPerBatch={10}
      initialNumToRender={10}
      showsVerticalScrollIndicator={false}
      entering={FadeInDown.delay(ANIMATION_DURATION.FAST).duration(
        ANIMATION_DURATION.FAST,
      )}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      ref={flatListRef}
      ListFooterComponent={
        loading || loadingMore ? (
          <LessonsSkeleton numOfElements={6} />
        ) : (
          <Footer />
        )
      }
    />
  );
};
export default LessonsList;
