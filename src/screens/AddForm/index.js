import React from 'react';
import { View } from 'react-native';
import { Text, Appbar, Button } from 'react-native-paper';
import { styles } from './styles';
import { COLORS } from '../../theme/globalColors';
import { useForm } from 'react-hook-form';
import ControlledTextInput from '../../components/Form/ControlledTextInput';
import { api } from '../../services/api';

const Title = ({ title }) => (
  <Text style={{ fontSize: 16, padding: 10 }}>{title}</Text>
);

const baseData = {
  priority: 0,
  price: 0,
  buy: false,
};

const AddForm = ({ navigation, route }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isUpdate = route?.params?.isUpdate;
  const mutate = route?.params?.mutateFunc;

  const onSubmit = handleSubmit(data => {
    const postData = {
      ...baseData,
      ...data,
    };

    api
      .post('/data', postData)
      .then(() => {
        mutate();
        navigation.goBack();
      })
      .catch(e => {
        console.error(e);
      });
  });

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
        <View style={{ marginBottom: 20 }}>
          <ControlledTextInput
            control={control}
            name="productName"
            rules={{ required: true }}
            label={'Nome do produto'}
          />
          {errors?.productName && (
            <Text style={styles.textError}>Esse campo é obrigatório!</Text>
          )}
        </View>
        <Button
          mode="contained"
          color={COLORS.PRIMARY}
          onPress={() => onSubmit()}
        >
          Adicionar item
        </Button>
      </View>
    </View>
  );
};

export default AddForm;
