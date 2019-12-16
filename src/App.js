import React from 'react';
import 'react-native-gesture-handler'
import {
  View
} from 'react-native';
import AppNavigator from './navigators/AppNavigator';

const App: () => React$Node = () => {
  return (
    <AppNavigator />
  );
};

export default App;
