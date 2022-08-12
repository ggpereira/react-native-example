import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';
import { styles } from './styles';

const BottomSheet = ({ onClose, visible, options }) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        contentContainerStyle={styles.bottomSheetContainer}
        onDismiss={onClose}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          Escolha uma opção
        </Text>
        {options.map(option => (
          <TouchableOpacity onPress={() => option.action()}>
            <Text style={{ fontSize: 14, color: '#1c1c1c' }}>
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </Modal>
    </Portal>
  );
};

export default BottomSheet;
