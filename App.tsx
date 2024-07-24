import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainNavigation from './src/navigation/MainNavigation';

const App = () => {
  return (
    <SafeAreaView>
      <MainNavigation />
    </SafeAreaView>
  );
};

export default App;
