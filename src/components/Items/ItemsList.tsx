import React from 'react';
import {View, FlatList} from 'react-native';
import {GetItemsData} from '../../graphql/types';
import Text from '../Text';

const ItemsList = ({items}: GetItemsData) => {
  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View>
          <Text variant="title">{item.title}</Text>
          <Text variant="body">{item.author}</Text>
        </View>
      )}
      numColumns={2}
      contentContainerStyle={{paddingBottom: 20, gap: 10}}
    />
  );
};
export default ItemsList;
