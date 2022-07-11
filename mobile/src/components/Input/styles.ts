import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  padding: ${RFValue(6)}px;

  border: 1px solid ${({ theme }) => theme.colors.brand[500]};

  border-radius: ${RFValue(5)}px;

  width: ${RFValue(300)}px;
  height: ${RFValue(40)}px;
`;

export const TextInput = styled.TextInput`
  padding: 0 ${RFValue(5)}px;
  font-size: ${RFValue(16)}px;

  font-family: ${({ theme }) => theme.fonts.poppins[400]};
  width: 100%;

  margin: 0 ${RFValue(4)}px;

`;
