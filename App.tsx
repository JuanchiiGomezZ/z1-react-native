import React, {useEffect} from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import {client, ApolloProvider} from './src/apollo/client';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme';
import TrackPlayer from 'react-native-track-player';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NotificationsProvider} from '@/config/ToastProvider';

const App = () => {
  useEffect(() => {
    const setupPlayer = async () => {
      try {
        await TrackPlayer.setupPlayer();
      } catch (error) {}
    };
    setupPlayer();
  }, []);

  return (
    <ApolloProvider client={client}>
      <GestureHandlerRootView>
        <ThemeProvider theme={theme}>
          <MainNavigation />
          <NotificationsProvider />
        </ThemeProvider>
      </GestureHandlerRootView>
    </ApolloProvider>
  );
};

export default App;
