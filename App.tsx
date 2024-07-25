import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import {client, ApolloProvider} from './src/apollo/client';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <MainNavigation />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
