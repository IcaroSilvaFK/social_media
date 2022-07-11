import { AddressBook, NotePencil } from 'phosphor-react-native';
import React from 'react';

import { Container,Heading,Box, Separator,Button } from './styles';

export function Header ()  {
  return (
    <Container>
      <Heading>
        Social Media
      </Heading>
      <Box>
        <Button>
          <NotePencil size={25} weight="bold" />
        </Button>
        <Separator/>
        <Button>
          <AddressBook size={25} weight="bold" />
        </Button>
      </Box>
    </Container>
  );
}
