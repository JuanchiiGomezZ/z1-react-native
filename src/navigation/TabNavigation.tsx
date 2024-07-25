import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {navigationScreenNames} from './navigationScreenNames';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {useTheme} from 'styled-components/native';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const {colors, typography} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.primary.darker,
          borderTopWidth: 0,
          height: 50,
        },
        tabBarLabelStyle: {
          fontFamily: typography.fontFamily.medium,
          fontSize: typography.fontSize.xs,
          color: colors.text,
        },
      }}>
      <Tab.Screen
        name={navigationScreenNames.home}
        component={Home}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faHome} size={25} color={colors.text} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
