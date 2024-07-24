import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {GetItemsData} from '../../graphql/types';

const ItemsList = ({items}: GetItemsData) => {
  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View>
          <Text>{item.title}</Text>
          <Text>{item.author}</Text>
        </View>
      )}
      contentContainerStyle={{paddingBottom: 20, gap: 10}}
    />
  );
};
export default ItemsList;
