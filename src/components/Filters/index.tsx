import React, {memo, useCallback} from 'react';
import {FlatList} from 'react-native';
import {useTheme} from 'styled-components/native';
import Button from '../Button';
import {Category} from '../../graphql/types';
import FiltersSkeleton from './FiltersSkeleton';

type FiltersProps = {
  data: Category[];
  activeFilter: string | null;
  onFilterChange: (id: string) => void;
  isLoading?: boolean;
};

const Filters = ({
  data,
  activeFilter,
  onFilterChange,
  isLoading,
}: FiltersProps) => {
  const {spacing} = useTheme();

  const renderItem = useCallback(
    ({item}: {item: Category}) => (
      <Button
        onPress={() => onFilterChange(item.id)}
        variant={activeFilter === item.id ? 'primary-focus' : 'primary'}
        label={item.title}
      />
    ),
    [activeFilter, onFilterChange],
  );

  if (isLoading) {
    return <FiltersSkeleton numOfElements={6} />;
  }
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={{
        marginLeft: spacing.lg,
        paddingBottom: spacing.xl,
        paddingTop: spacing.md,
        paddingRight: spacing.xl,
        gap: spacing.sm,
      }}
    />
  );
};

export default memo(Filters);
