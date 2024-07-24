import React from 'react';
import {Text} from 'react-native';
import {useItems} from '../../hooks/useItems';
import Loader from '../../components/Loader';
import ItemsList from '../../components/Items/ItemsList';
import Container from '../../components/Container';

const Home = () => {
  const {items, loading, error} = useItems();

  if (loading) return <Loader />;
  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <Container>
      <ItemsList items={items} />
    </Container>
  );
};

export default Home;
