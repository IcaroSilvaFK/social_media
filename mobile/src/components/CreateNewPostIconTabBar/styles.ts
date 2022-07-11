import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

type RoundeProps ={
  isActive: boolean
}

export const Container = styled.View`
  margin-bottom: 20px;

  align-items: center;

`;

export const Rounded = styled.View<RoundeProps>`
  background: ${({theme}) => theme.colors.neutrals.white};
  padding:${RFValue(10)}px;
  border-radius: ${RFValue(50)}px;

  ${
    ({isActive}) => isActive && css`
      background: ${({theme}) => theme.colors.neutrals.gray[300]};
    ` 
  }

`;

export const Label = styled.Text`
  color: ${({theme}) => theme.colors.neutrals.white};
`