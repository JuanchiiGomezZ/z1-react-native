// useCustomNavigation.ts
import {
  NavigationProp,
  useNavigation as useNav,
} from '@react-navigation/native';
import {QueryParams} from '../navigation/navigationScreenNames';

const useNavigation = () => {
  return useNav<NavigationProp<QueryParams>>();
};

export default useNavigation;
