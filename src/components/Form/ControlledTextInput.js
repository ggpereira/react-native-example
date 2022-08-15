import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';
import { COLORS } from '../../theme/globalColors';

const ControlledTextInput = ({ control, name, label, rules }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <TextInput
          activeUnderlineColor={COLORS.PRIMARY}
          label={label}
          value={value}
          onChangeText={text => onChange(text)}
        />
      )}
    />
  );
};

export default ControlledTextInput;
