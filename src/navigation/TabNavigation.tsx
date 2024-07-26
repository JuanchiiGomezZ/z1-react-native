import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {useTheme} from 'styled-components/native';
import LotusSVG from '../assets/svg/lotus';

type TabNavigationScreens = {
  Home: undefined;
};

const Tab = createBottomTabNavigator<TabNavigationScreens>();

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
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <LotusSVG width={50} color={colors.text} />,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
