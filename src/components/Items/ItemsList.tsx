import React, {useCallback} from 'react';
import {Item} from '@/graphql/types';
import ItemCard from './ItemCard';
import {useTheme} from 'styled-components/native';
import ItemsListSkeleton from './ItemsListSkeleton';
import useNavigation from '@/hooks/useNavigation';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {ANIMATION_DURATION} from '@/constants';
import {UseItemsResult} from '@/hooks/useItems';
import useDebounce from '@/hooks/useDebounce';
import {FlatList} from 'react-native';
import Footer from '../Footer';

type ItemsListProps = UseItemsResult & {
  flatListRef?: React.RefObject<FlatList>;
};

const ItemsList = ({
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
    (item: Item) => {
      navigation.navigate('Details', item);
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}: {item: Item}) => (
      <ItemCard {...item} onPress={() => handleItemPress(item)} />
    ),
    [],
  );

  return (
    <Animated.FlatList
      data={items}
      keyExtractor={(item: Item) => item.id}
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
          <ItemsListSkeleton numOfElements={6} />
        ) : (
          <Footer />
        )
      }
    />
  );
};
export default ItemsList;
