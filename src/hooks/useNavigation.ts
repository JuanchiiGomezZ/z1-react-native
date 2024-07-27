// useCustomNavigation.ts
import {
  NavigationProp,
  useNavigation as useNav,
} from '@react-navigation/native';
import {QueryParams} from '@/navigation/MainNavigation';

const useNavigation = () => {
  return useNav<NavigationProp<QueryParams>>();
};

export default useNavigation;
