import React from 'react';
import {SafeAreaView} from 'react-native';

import MainNavigation from './src/navigation/MainNavigation';

import {client, ApolloProvider} from './src/apollo/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MainNavigation />
    </ApolloProvider>
  );
};

export default App;
