import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import { Container, TextInput } from './styles';

interface IInputProps {
  name: string;
  placeholder: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

export function Input({ name, placeholder, leftIcon, rightIcon }: IInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Container>
          {leftIcon}
          <TextInput placeholder={placeholder} {...field} />
          {rightIcon}
        </Container>
      )}
    />
  );
}
