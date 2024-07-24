import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainNavigation from '/@navigation/MainNavigation';

import {client, ApolloProvider} from '/@apollo/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        <MainNavigation />
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;
