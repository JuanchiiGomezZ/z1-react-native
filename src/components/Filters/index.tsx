import React, {memo, useCallback} from 'react';
import {FlatList} from 'react-native';
import {useTheme} from 'styled-components/native';
import Button from '../Button';
import {Category} from '../../graphql/types';

type FiltersProps = {
  data: Category[];
  activeFilter: string | null;
  onFilterChange: (id: string) => void;
};

const Filters = ({data, activeFilter, onFilterChange}: FiltersProps) => {
  const {spacing} = useTheme();

  const renderItem = useCallback(
    ({item}: {item: Category}) => (
      <Button
        onPress={() => onFilterChange(item.id)}
        variant={activeFilter === item.id ? 'primary-focus' : 'primary'}>
        {item.title}
      </Button>
    ),
    [activeFilter, onFilterChange],
  );
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={{
        marginLeft: spacing.lg,
        paddingVertical: spacing.lg,
        paddingRight: spacing.xl,
        gap: spacing.sm,
      }}
    />
  );
};

export default memo(Filters);
