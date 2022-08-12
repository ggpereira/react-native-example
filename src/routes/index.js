import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/Home';
import AddForm from '../screens/AddForm';

const MainNavigator = createStackNavigator();

export const RootNavigator = () => {
  return (
    <MainNavigator.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerMode: 'none' }}
    >
      <MainNavigator.Screen name="HomeScreen" component={HomeScreen} />
      <MainNavigator.Screen name="AddFormScreen" component={AddForm} />
    </MainNavigator.Navigator>
  );
};
