import React, {useCallback, useEffect, useState} from 'react';
import {useItems} from '../../hooks/useItems';
import Loader from '../../components/Loader';
import ItemsList from '../../components/Items/ItemsList';
import Container from '../../components/Container';
import Text from '../../components/Text';
import Filters from '../../components/Filters';
import {FILTER_DATA} from '../../assets/data';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<string>('');
  const {items, loading, error} = useItems(activeFilter);

  const handleFilterChange = useCallback(
    (id: string) => {
      if (id === activeFilter) {
        setActiveFilter('');
        return;
      }
      setActiveFilter(id);
    },
    [activeFilter],
  );

  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <Container>
      <Filters
        data={FILTER_DATA}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
        isLoading={loading}
      />
      <ItemsList items={items} isLoading={loading} />
    </Container>
  );
};

export default Home;
