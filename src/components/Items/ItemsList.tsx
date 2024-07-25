import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {GetItemsData, Item} from '../../graphql/types';
import ItemCard from './ItemCard';
import {useTheme} from 'styled-components/native';

const ItemsList = ({items}: GetItemsData) => {
  const {spacing} = useTheme();

  const renderItem = useCallback(
    ({item}: {item: Item}) => <ItemCard {...item} />,
    [],
  );
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
