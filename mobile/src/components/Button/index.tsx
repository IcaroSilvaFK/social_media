import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Paragraphy } from './styles';
import { Variants } from './variants';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  variant: Variants;
  onPress: () => void;
}

export function Button({ title, variant, onPress }: IButtonProps) {
  return (
    <Container variant={variant} onPress={onPress}>
      <Paragraphy variant={variant}>{title}</Paragraphy>
    </Container>
  );
}
