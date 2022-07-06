import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import { Container, TextInput } from './styles';

interface IInputProps {
  name: string;
  placeholder: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  isPassword?: boolean;
}

export function Input({
  name,
  placeholder,
  leftIcon,
  rightIcon,
  isPassword,
}: IInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onBlur, onChange, value } }) => (
        <Container>
          {leftIcon}
          <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={isPassword}
            autoCorrect={false}
          />
          {rightIcon}
        </Container>
      )}
    />
  );
}
