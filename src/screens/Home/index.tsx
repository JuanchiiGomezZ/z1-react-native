import React from 'react';
import {useItems} from '../../hooks/useItems';
import Loader from '../../components/Loader';
import ItemsList from '../../components/Items/ItemsList';
import Container from '../../components/Container';
import Text from '../../components/Text';

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
