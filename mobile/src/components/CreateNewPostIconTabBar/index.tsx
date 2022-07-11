import { Plus } from 'phosphor-react-native';
import React from 'react';
import { theme } from '../../styles/theme';

import { Container,Rounded,Label } from './styles';

interface ICreateNewPostIconTabBarProps{
  isFocused: boolean
}

export function CreateNewPostIconTabBar ({isFocused}:ICreateNewPostIconTabBarProps){
  return (
    <Container>
      <Rounded isActive={isFocused}>
        <Plus size={25} weight="bold" color={theme.colors.brand[300]}/>
      </Rounded>
      <Label>Novo Post</Label>
    </Container>
  );
}
