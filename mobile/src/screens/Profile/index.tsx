import React from 'react';
import * as ImagePicker from 'expo-image-picker';

import { HeaderProfile } from '../../components/HeaderProfile';

import { useUser } from '../../hooks/useUser';

import { Box, Column, Container, Image, Heading } from './styles';
import { TouchableOpacity } from 'react-native';
import { api } from '../../configs/axios';

interface IFileProps {
  base64: string;
  cancelled: boolean;
  height: number;
  type: string;
  uri: string;
  width: number;
}

export function Profile() {
  const { user, refetch } = useUser();

  async function openImagePicker() {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permission.granted === false) {
      return;
    }
    const imageResult = (await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
    })) as IFileProps;

    const extension = imageResult.uri.substring(
      imageResult.uri.lastIndexOf('.') + 1
    );
    const imageData = `data:image/${extension};base64,` + imageResult.base64;
    if (user && user.avatar_url !== null) {
      console.log(`user/image/${user.id}`);
      const { status } = await api.put(`/user/image/${user.id}`, {
        data: imageData,
      });
      refetch();
      return;
    }
    console.log('a');
    await api.post('user/image', {
      userId: user?.id,
      avatar: imageData,
    });
    refetch();
    return;
  }

  return (
    <Container>
      <HeaderProfile username={user?.username!} />
      <Box>
        <TouchableOpacity onPress={openImagePicker}>
          <Image
            source={
              user?.avatar_url
                ? { uri: user.avatar_url.avatar }
                : require('../../../assets/user.png')
            }
          />
        </TouchableOpacity>

        <Column>
          <Heading>{user?.username}</Heading>
        </Column>
      </Box>
    </Container>
  );
}
