import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import {navigationScreenNames} from './navigationScreenNames';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigation"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen
          name={navigationScreenNames.detials}
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
