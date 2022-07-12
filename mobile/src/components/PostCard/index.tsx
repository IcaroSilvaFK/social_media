import React from 'react';
import {format} from 'date-fns'

import {useUser} from '../../hooks/useUser'


import { Container,Img,Content,Footer,UserView,ProfileImage, Row,Text,EditIcon, DatePost} from './styles';
import { PencilSimpleLine } from 'phosphor-react-native';


interface IPostCardProps{
	created_at: string,
	description: string,
  id:string,
  image_cover: string | null,
	user: {
    id: string;
    username:string
    avatar_url: {
      avatar: string 
    } | null
  }
}

export function PosCard({created_at,description,image_cover,id,user}:IPostCardProps) {
  const dateFormatted = format(new Date(created_at), "EEEE' • 'd' de 'MMMM' • 'k'h'mm")
  const {user:userLogged} = useUser()

  return (
    <Container>
      <UserView>
        <ProfileImage 
          source={
            user.avatar_url ? {
              uri: user.avatar_url.avatar
            }:require( '../../../assets/user.png' )
          }
        />
        <Text>{user.username}</Text>
      </UserView>
      { 
        image_cover && (
          <Img
            source={{ uri : image_cover }}
          />
        )
      }
       <Content>{description}</Content>
      <Footer>
        <DatePost>
          publicado em {dateFormatted}
        </DatePost>
        {
          userLogged?.id === user.id && <EditIcon   size={20} weight="bold" />
        }

      </Footer>
    </Container>
  );
}


/*
    
             

  
         
*/