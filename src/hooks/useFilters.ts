import {FILTER_DATA} from '@/assets/data';
import {Category} from '@/graphql/types';
import {useCallback, useEffect, useState} from 'react';

type useFilterReturn = {
  data: Category[];
  activeFilter: string;
  handleChangeFilter: (id: string) => void;
};

type useFiltersProps = {
  onFilterChange: () => void;
};

export default function useFilters({
  onFilterChange,
}: useFiltersProps): useFilterReturn {
  const [activeCategory, setActiveFilter] = useState<string>('');

  const handleChangeFilter = useCallback(
    (id: string) => {
      setActiveFilter(prev => (prev === id ? '' : id));
    },
    [activeCategory],
  );

  useEffect(() => {
    onFilterChange();
  }, [activeCategory]);

  return {
    data: FILTER_DATA,
    activeFilter: activeCategory,
    handleChangeFilter,
  };
}
