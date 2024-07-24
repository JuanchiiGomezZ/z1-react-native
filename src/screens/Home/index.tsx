import React from 'react';
import {View, Text} from 'react-native';
import {useItems} from '../../hooks/useItems';
import Loader from '../../components/Loader';
import ItemsList from '../../components/Items/ItemsList';

const Home = () => {
  const {items, loading, error} = useItems();

  if (loading) return <Loader />;
  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <View style={{flex: 1, paddingHorizontal: 5}}>
      <ItemsList items={items} />
    </View>
  );
};

export default Home;
