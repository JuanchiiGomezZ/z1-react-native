import React, {useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Home from '@/screens/Home';
import {useTheme} from 'styled-components/native';
import Lotus from '@/assets/images/Lotus';
import {TabNavigationScreens} from './types';

const Tab = createBottomTabNavigator<TabNavigationScreens>();

const TabNavigation = () => {
  const {colors, typography} = useTheme();

  const tabBarBackground = useCallback(
    () => (
      <View style={StyleSheet.absoluteFill}>
        <LinearGradient
          colors={[
            'rgba(0,0,0,0)',
            colors.primary.darker,
            colors.primary.darker,
          ]}
          locations={[0, 0.2, 1]}
          style={StyleSheet.absoluteFill}
        />
      </View>
    ),
    [colors.primary.darker],
  );

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
        tabBarBackground,
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
          tabBarIcon: ({color, size}) => <Lotus width={40} color={colors.text} />,
          // tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
