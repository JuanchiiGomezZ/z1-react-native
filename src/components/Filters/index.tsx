import React, {memo, useCallback} from 'react';
import {useTheme} from 'styled-components/native';
import Button from '@/components/Button';
import {Category} from '@/graphql/types';
import FiltersSkeleton from './FiltersSkeleton';
import Animated, {FadeIn} from 'react-native-reanimated';
import {ANIMATION_DURATION} from '@/constants';

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
    <Animated.FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      style={{flexGrow: 0}}
      contentContainerStyle={{
        marginLeft: spacing.lg,
        paddingBottom: spacing.xl,
        paddingTop: spacing.md,
        paddingRight: spacing.xl,
        gap: spacing.sm,
      }}
      entering={FadeIn.delay(ANIMATION_DURATION.FAST).duration(
        ANIMATION_DURATION.FAST,
      )}
    />
  );
};

export default memo(Filters);
