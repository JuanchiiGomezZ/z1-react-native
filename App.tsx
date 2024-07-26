import React, {useEffect} from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import {client, ApolloProvider} from './src/apollo/client';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme';
import TrackPlayer from 'react-native-track-player';

const App = () => {
  useEffect(() => {
    const setupPlayer = async () => {
      try {
        await TrackPlayer.setupPlayer();
      } catch (error) {
        console.error('Error setting up TrackPlayer:', error);
      }
    };

    setupPlayer();
  }, []);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <MainNavigation />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
