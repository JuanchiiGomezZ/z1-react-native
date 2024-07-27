import React, {useCallback, useState} from 'react';
import {useItems} from '@/hooks/useItems';
import ItemsList from '@/components/Items/ItemsList';
import Container from '@/components/Container';
import Text from '@/components/Text';
import Filters from '@/components/Filters';
import {FILTER_DATA} from '@/assets/data';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  ${({theme}) => `margin-top: ${theme.spacing.md}px;`}
`;

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<string>('');
  const {items, loading, error} = useItems(activeFilter);

  const handleFilterChange = useCallback(
    (id: string) => {
      setActiveFilter(prev => (prev === id ? '' : id));
    },
    [activeFilter],
  );

  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <Container>
      <StyledView>
        <Text variant="header" align="center">
          Learn
        </Text>
        <Filters
          data={FILTER_DATA}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          isLoading={loading}
        />
        <ItemsList items={items} isLoading={loading} />
      </StyledView>
    </Container>
  );
};

export default Home;
