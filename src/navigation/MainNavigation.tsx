import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import Details from '@/screens/Details';
import {Item} from '@/graphql/types';
import AudioPlayer, {AudioPlayerProps} from '@/screens/AudioPlayer';
import {MainNavigationScreens} from './types';

const Stack = createNativeStackNavigator<MainNavigationScreens>();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigation"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen
          name="AudioPlayer"
          component={AudioPlayer}
          options={{animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
