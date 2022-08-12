import React from 'react';
import { FAB } from 'react-native-paper';
import { styles } from './styles';

const FabButton = ({ icon, onPress }) => {
  return <FAB icon={icon} style={styles.fabStyle} onPress={onPress} />;
};

export default FabButton;
