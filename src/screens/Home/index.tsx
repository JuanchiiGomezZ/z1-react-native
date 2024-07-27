import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useItems} from '@/hooks/useItems';
import ItemsList from '@/components/Items/ItemsList';
import Container from '@/components/Container';
import Text from '@/components/Text';
import Filters from '@/components/Filters';
import {FILTER_DATA} from '@/assets/data';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import ErrorState from '@/components/ErrorState';

const StyledView = styled.View`
  flex: 1;
  ${({theme}) => `margin-top: ${theme.spacing.md}px;`}
`;

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<string>('');
  const items = useItems({filterCategoryId: activeFilter, itemsPerPage: 10});
  const flatlistRef = useRef<FlatList>(null);

  const handleFilterChange = useCallback(
    (id: string) => {
      setActiveFilter(prev => (prev === id ? '' : id));
    },
    [activeFilter],
  );

  useEffect(() => {
    flatlistRef.current?.scrollToOffset({offset: 0});
  }, [activeFilter]);

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
          isLoading={items.loading}
        />
        {items.error ? (
          <ErrorState />
        ) : (
          <ItemsList {...items} flatListRef={flatlistRef} />
        )}
      </StyledView>
    </Container>
  );
};

export default Home;
