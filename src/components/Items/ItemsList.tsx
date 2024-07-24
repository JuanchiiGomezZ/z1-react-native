import React from 'react';
import {View, FlatList} from 'react-native';
import {GetItemsData} from '../../graphql/types';
import Text from '../Text';
import ItemCard from './ItemCard';

const ItemsList = ({items}: GetItemsData) => {
  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ItemCard {...item} />}
      numColumns={2}
      contentContainerStyle={{
        paddingBottom: 20,
        gap: 10,
      }}
      columnWrapperStyle={{
        gap: 10,
      }}
    />
  );
};
export default ItemsList;
