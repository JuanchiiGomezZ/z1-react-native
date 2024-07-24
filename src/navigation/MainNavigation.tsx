import React, {useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenListeners={{}}>
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
