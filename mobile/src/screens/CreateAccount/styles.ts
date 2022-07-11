import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`

export const Separator = styled.View`
  margin: ${RFValue(10)}px 0;
`
export const Box = styled.View`
  align-items: center;
`

export const Form = styled.View`
  width: 100%;
  padding: ${RFValue(35)}px;
`

export const ButtonHighlight = styled.TouchableHighlight`
  margin: 0 ${RFValue(5)}px;
`;

export const Anchor = styled.TouchableOpacity``
export const AnchorText = styled.Text``

export const Heading = styled.Text`
  font-size: ${RFValue(36)}px;
  font-family: ${({theme}) => theme.fonts['dancing-script'][700]};
  color:${({theme}) => theme.colors.brand[500]};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;