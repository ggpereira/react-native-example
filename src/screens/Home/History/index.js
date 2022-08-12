import React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { styles } from './styles';

export const History = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.headerStyle}>
        <Appbar.Content title="Histórico de compras" />
      </Appbar.Header>
      <Text>History</Text>
    </View>
  );
};
