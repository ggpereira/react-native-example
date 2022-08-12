import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './routes';
import { styles } from './styles';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider theme={DefaultTheme}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
