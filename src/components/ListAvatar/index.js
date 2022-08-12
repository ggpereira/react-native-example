import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

const ListAvatar = ({ children, backgroundColor }) => {
  return (
    <View
      style={[
        styles.avatarContainer,
        backgroundColor ? { backgroundColor: backgroundColor } : null,
      ]}
    >
      {children}
    </View>
  );
};

export default ListAvatar;
