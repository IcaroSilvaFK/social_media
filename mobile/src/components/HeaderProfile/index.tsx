import { AddressBook, NotePencil } from 'phosphor-react-native';
import React from 'react';

import { Container, Heading, Row, Button, Separator } from './styles';

interface IHeaderProfileProps {
  username: string;
}

export function HeaderProfile({ username }: IHeaderProfileProps) {
  return (
    <Container>
      <Heading>{username}</Heading>
      <Row>
        <Button>
          <NotePencil size={25} weight='bold' />
        </Button>
        <Separator />
        <Button>
          <AddressBook size={25} weight='bold' />
        </Button>
      </Row>
    </Container>
  );
}
