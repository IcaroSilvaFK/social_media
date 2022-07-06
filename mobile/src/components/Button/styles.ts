import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { Variants } from './variants';

type ButtonVariants = {
  variant: Variants;
};

export const Container = styled(TouchableOpacity)<ButtonVariants>`
  padding: ${RFValue(8)}px ${RFValue(24)}px;
  border-radius: ${RFValue(8)}px;

  ${({ variant }) =>
    variant === 'solid' &&
    css`
      background: ${({ theme }) => theme.colors.brand[500]};
    `}
  ${({ variant }) => variant === 'link' && css``}
  ${({ variant }) => variant === 'ghost' && css``}
  ${({ variant }) => variant === 'outline' && css``}
`;

export const Paragraphy = styled.Text<ButtonVariants>`
  font-family: ${({ theme }) => theme.fonts.poppins[400]};
  font-size: ${RFValue(16)}px;

  ${({ variant }) =>
    variant === 'solid' &&
    css`
      color: ${({ theme }) => theme.colors.neutrals.white};
    `}
`;
