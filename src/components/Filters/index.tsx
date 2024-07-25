import React from 'react';
import {FlatList, View} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import Button from '../Button';
import {Category} from '../../graphql/types';

type FiltersProps = {
  data: Category[];
};

const Filters = ({data}: FiltersProps) => {
  const {spacing} = useTheme();
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Button onPress={() => {}} variant="primary">
          {item.title}
        </Button>
      )}
      contentContainerStyle={{
        marginLeft: spacing.lg,
        paddingVertical: spacing.lg,
        paddingRight: spacing.xl,
        gap: spacing.sm,
      }}
    />
  );
};

export default Filters;
