import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import {client, ApolloProvider} from './src/apollo/client';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme';
import useTrackPlayerInit from './src/hooks/useTrackPlayerInit';

const App = () => {
  const {isLoading} = useTrackPlayerInit();
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <MainNavigation />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
