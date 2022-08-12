import React from 'react';

import { View } from 'react-native';
import { styles } from './styles';

import { History } from './History';
import { ShoppingList } from './ShoppingList';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../theme/globalColors';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const HomeBottomTab = createMaterialBottomTabNavigator();

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeBottomTab.Navigator
        initialRouteName="ShoppingList"
        barStyle={{
          backgroundColor: COLORS.PRIMARY,
        }}
      >
        <HomeBottomTab.Screen
          name="ShoppingList"
          component={ShoppingList}
          options={{
            tabBarLabel: 'Lista de compras',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcon
                name="cart-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <HomeBottomTab.Screen
          name="History"
          component={History}
          options={{
            tabBarLabel: 'Histórico',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcon name="history" color={color} size={26} />
            ),
          }}
        />
      </HomeBottomTab.Navigator>
    </View>
  );
};
