import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Home from '../screens/Home';
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
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          height: 60,
        },
        tabBarBackground: () => (
          <View style={StyleSheet.absoluteFill}>
            <LinearGradient
              colors={[
                'rgba(0,0,0,0)', // Completely transparent
                colors.primary.darker, // Solid color
                colors.primary.darker, // Solid color (repeated to ensure full coverage)
              ]}
              locations={[0, 0.2, 1]} // 20% gradient, 80% solid
              style={[StyleSheet.absoluteFill]}
            />
          </View>
        ),
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
          // tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
