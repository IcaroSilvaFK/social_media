import { PencilSimpleLine } from 'phosphor-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;

  padding: ${RFValue(14)}px ${RFValue(4)}px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.colors.neutrals.gray[300]};
`;

export const Footer = styled.View``;

export const UserView = styled.View`
  flex-direction: row;
  align-items: center;

  padding: ${RFValue(12)}px 0;
`;

export const Img = styled.Image`
 
`;

export const Row = styled.View``;

export const ProfileImage = styled.Image`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;

  border-radius: ${RFValue(50)}px;

  margin-right: ${RFValue(5)}px;
`;

export const Content =  styled.Text`
  padding: ${RFValue(5)}px;
  font-family: ${({theme})=> theme.fonts.poppins[300]};
`;

export const Text = styled.Text`
  ${({theme}) => theme.fonts.poppins[300]};
`

export const DatePost = styled.Text`
  font-size: ${RFValue(12)}px;
`;

export const EditIcon = styled(PencilSimpleLine)``