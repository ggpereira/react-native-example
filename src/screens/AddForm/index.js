import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Appbar, TextInput, Button } from 'react-native-paper';
import { styles } from './styles';
import { COLORS } from '../../theme/globalColors';

const Title = ({ title }) => (
  <Text style={{ fontSize: 16, padding: 10 }}>{title}</Text>
);

const AddForm = ({ navigation, route }) => {
  const isUpdate = route?.params?.isUpdate;

  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.headerStyle}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title={isUpdate ? 'Editar compras' : 'Adicionar compras'}
        />
      </Appbar.Header>
      <View style={styles.formContainer}>
        <Title title="Adicionar item para a lista" />
        <TextInput
          activeUnderlineColor={COLORS.PRIMARY}
          label="Nome do produto"
          value={value}
          onChangeText={text => setValue(text)}
          style={{ marginBottom: 20 }}
        />
        <Button mode="contained" color={COLORS.PRIMARY}>
          Adicionar item
        </Button>
      </View>
    </View>
  );
};

export default AddForm;
