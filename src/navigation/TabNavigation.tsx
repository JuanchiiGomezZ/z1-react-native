import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {navigationScreenNames} from './navigationScreenNames';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={navigationScreenNames.home} component={Home} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
