import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  align-items: center;

  width: 100%;

  padding: ${RFValue(35)}px;
`;

export const Separator = styled.View`
  height: ${RFValue(20)}px;
`;

export const Box = styled.View`
  flex-direction: row;
  justify-content: flex-end;

  width: 100%;

  margin-bottom: ${RFValue(10)}PX;
`;

export const Link = styled.Text``;
