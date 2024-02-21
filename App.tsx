import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import 'react-native-gesture-handler';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './rn/AppNavigator';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AppNavigator />
    </>
  );
}

export default App;
