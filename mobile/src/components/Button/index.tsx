import React, { ReactNode } from 'react';
import { ButtonProps } from 'react-native';
import { Container } from './styles';
import { Variants } from './variants';

interface IButtonProps extends ButtonProps {
  children: ReactNode;
  variant: Variants;
}

export function Button({ children, variant }: IButtonProps) {
  return <Container variant={variant}>{children}</Container>;
}
