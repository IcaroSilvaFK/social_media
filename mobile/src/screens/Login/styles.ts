import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
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

export const Link = styled.Text`
  font-family: ${({theme}) => theme.fonts.poppins[300]};
`;

export const Heading = styled.Text`
  font-size: ${RFValue(36)}px;
  font-family: ${({theme}) => theme.fonts['dancing-script'][700]};
  color:${({theme}) => theme.colors.brand[500]};
`;

export const LinkButton = styled.TouchableOpacity`
  padding: ${RFValue(4)}px;
  margin:0 ${RFValue(12)}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ButtonHighlight = styled.TouchableHighlight`
  margin: 0 ${RFValue(5)}px;
`;

export const Center = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;