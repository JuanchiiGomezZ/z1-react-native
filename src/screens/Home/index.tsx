import React from 'react';
import {useItems} from '../../hooks/useItems';
import Loader from '../../components/Loader';
import ItemsList from '../../components/Items/ItemsList';
import Container from '../../components/Container';
import Text from '../../components/Text';
import Filters from '../../components/Filters';
import {FILTER_DATA} from '../../assets/data';

const Home = () => {
  const {items, loading, error} = useItems();

  if (loading) return <Loader />;
  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <Container>
      <Filters data={FILTER_DATA} />
      <ItemsList items={items} />
    </Container>
  );
};

export default Home;
