import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {GetItemsData, Item} from '../../graphql/types';
import ItemCard from './ItemCard';
import {useTheme} from 'styled-components/native';
import ItemsListSkeleton from './ItemsListSkeleton';
import useNavigation from '../../hooks/useNavigation';

type ItemsListProps = {
  items: Item[];
  isLoading?: boolean;
};
const ItemsList = ({items, isLoading}: ItemsListProps) => {
  const {spacing} = useTheme();
  const navigation = useNavigation();

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

  if (isLoading) {
    return <ItemsListSkeleton numOfElements={6} />;
  }
  return (
    <FlatList
      data={items}
      keyExtractor={(item: Item) => item.id}
      renderItem={renderItem}
      numColumns={2}
      contentContainerStyle={{
        gap: spacing.md,
        paddingHorizontal: spacing.lg,
        paddingBottom: spacing.xl,
      }}
      columnWrapperStyle={{
        gap: spacing.md,
      }}
      maxToRenderPerBatch={10}
      initialNumToRender={10}
      windowSize={6}
      removeClippedSubviews={true}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default ItemsList;
