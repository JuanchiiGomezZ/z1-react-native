import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import Details from '../screens/Details';
import {Item} from '../graphql/types';
import AudioPlayer, {AudioPlayerProps} from '../screens/AudioPlayer';

export type QueryParams = {
  TabNavigation: undefined;
  Details: Item;
  AudioPlayer: AudioPlayerProps;
};

const Stack = createNativeStackNavigator<QueryParams>();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigation"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="AudioPlayer"
          component={AudioPlayer}
          options={{animation: 'slide_from_right'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
