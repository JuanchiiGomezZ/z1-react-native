// useCustomNavigation.ts
import {
  NavigationProp,
  useNavigation as useNav,
} from '@react-navigation/native';
import {MainNavigationScreens} from '@/navigation/types';

const useNavigation = () => {
  return useNav<NavigationProp<MainNavigationScreens>>();
};

export default useNavigation;
