import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useItems} from '@/hooks/useItems';
import LessonsList from './components/LessonsList';
import Container from '@/components/Container';
import Text from '@/components/Text';
import Filters from '@/components/Filters';
import {FILTER_DATA} from '@/assets/data';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import ErrorState from '@/components/ErrorState';
import useFilters from '@/hooks/useFilters';

const StyledView = styled.View`
  flex: 1;
  ${({theme}) => `margin-top: ${theme.spacing.md}px;`}
`;

const Home = () => {
  const flatlistRef = useRef<FlatList>(null);
  const onFilterChange = useCallback(() => {
    flatlistRef.current?.scrollToOffset({offset: 0});
  }, []);
  const filters = useFilters({onFilterChange});
  const items = useItems({
    filterCategoryId: filters.activeFilter,
    itemsPerPage: 10,
  });

  return (
    <Container>
      <StyledView>
        <Text variant="header" align="center">
          Learn
        </Text>
        <Filters {...filters} isLoading={items.loading} />
        {items.error ? (
          <ErrorState />
        ) : (
          <LessonsList {...items} flatListRef={flatlistRef} />
        )}
      </StyledView>
    </Container>
  );
};

export default Home;
