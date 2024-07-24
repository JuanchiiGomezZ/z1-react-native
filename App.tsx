import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainNavigation from './src/navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {client, ApolloProvider} from './src/apollo/client';

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
