import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Variants } from './variants';

type ButtonVariants = {
  variant: Variants;
};

export const Container = styled(TouchableOpacity)<ButtonVariants>`
  ${({ variant }) => variant === 'solid' && css``}
  ${({ variant }) => variant === 'link' && css``}
  ${({ variant }) => variant === 'ghost' && css``}
  ${({ variant }) => variant === 'outline' && css``}
`;
