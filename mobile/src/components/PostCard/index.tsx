import React from 'react';

import { Container,Img,Heading } from './styles';


interface IPostCardProps{
  title: string;
  image_cover?: string;
  created_at: string;
}

export function PosCard({created_at,title,image_cover}:IPostCardProps) {
  return (
    <Container>
      { 
        image_cover && (
          <Img
            source={{ uri : image_cover }}
          />
        )
      }
      <Heading>{title}</Heading>
    </Container>
  );
}
