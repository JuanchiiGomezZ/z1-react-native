import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import Skeleton from '../Skeleton';
import {FlatList} from 'react-native';

const FilterButtonSkeleton = styled.View`
  width: 100px;
  height: 40px;
  border-radius: ${({theme}) => theme.borderRadius.md}px;
  background-color: ${({theme}) => theme.colors.primary.dark};
`;

const FiltersSkeleton = ({numOfElements}: {numOfElements: number}) => {
  const {spacing} = useTheme();

  return (
    <Skeleton>
      <FlatList
        data={new Array(numOfElements).fill(0)}
        renderItem={() => <FilterButtonSkeleton />}
        keyExtractor={(_, index) => index.toString()}
        scrollEnabled={false}
        contentContainerStyle={{
          marginLeft: spacing.lg,
          paddingVertical: spacing.lg,
          paddingRight: spacing.xl,
          gap: spacing.sm,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Skeleton>
  );
};

export default FiltersSkeleton;
