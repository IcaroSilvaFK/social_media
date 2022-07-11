import { PencilSimpleLine } from 'phosphor-react-native';
import React from 'react'

import {useUser} from '../../hooks/useUser'
import {theme} from '../../styles/theme';


import {Container,Heading,Box} from './styles'

export function UserProfile(){
  const {user} = useUser();

  return (
    <Container>
      {user ? (
        <Box>
          <Heading>
            Olá @{user.username}
          </Heading>
          <PencilSimpleLine size={20} weight="bold" color={theme.colors.neutrals.gray[300]} />
        </Box>
      
      ):(
        <Heading>
          Olá 
        </Heading>
      )}
    </Container>
  )
}