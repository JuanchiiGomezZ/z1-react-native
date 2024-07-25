import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import Skeleton from '../Skeleton';
import {FlatList} from 'react-native';

const ItemCardSkeleton = styled.View`
  flex: 1;
  width: 100%;
  height: 300px;
  border-radius: ${({theme}) => theme.borderRadius.md}px;
  background-color: ${({theme}) => theme.colors.primary.dark};
`;

const ItemsListSkeleton = ({numOfElements}: {numOfElements: number}) => {
  const {spacing} = useTheme();

  return (
    <Skeleton>
      <FlatList
        data={new Array(numOfElements).fill(0)}
        renderItem={() => <ItemCardSkeleton />}
        keyExtractor={(_, index) => index.toString()}
        scrollEnabled={false}
        contentContainerStyle={{
          gap: spacing.md,
          paddingHorizontal: spacing.lg,
          paddingBottom: spacing.xl,
        }}
        columnWrapperStyle={{
          gap: spacing.md,
        }}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </Skeleton>
  );
};

export default ItemsListSkeleton;
