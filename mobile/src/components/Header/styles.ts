import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  justify-content: space-between;

  padding-top:   ${RFValue(40)}px;
  padding-left:  ${RFValue(12)}px;
  padding-right: ${RFValue(12)}px;
  padding-bottom:${RFValue(12)}px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.colors.neutrals.gray[400]};
`;

export const Heading = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: ${({theme}) => theme.fonts['dancing-script'][700]};
  color:${({theme}) => theme.colors.brand[500]};
`;

export const Box = styled.View`
  flex-direction: row;
`;

export const Separator = styled.View`
  margin: 0 ${RFValue(10)}px
`;

export const Button = styled.TouchableOpacity`

`;