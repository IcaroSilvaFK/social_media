import { Warning } from 'phosphor-react-native';
import React from 'react';
import { FlatList, Image, View } from 'react-native';
import { Header } from '../../components/Header';
import { PosCard } from '../../components/PostCard';
import { usePosts } from '../../hooks/usePosts';

import { Container, ViewScroll } from './styles';

export function Home() {
  const { isError, posts } = usePosts();
  return (
    <Container>
      <Header />
      {isError && (
        <View>
          <Warning size={20} weight='bold' />
        </View>
      )}
      <FlatList
        data={posts}
        renderItem={({ item }) => <PosCard {...item} />}
        keyExtractor={({ id }) => id}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
/*
  
*/
