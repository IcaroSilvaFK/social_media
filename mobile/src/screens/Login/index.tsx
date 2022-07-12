import { Eye, EyeSlash, Password, User } from 'phosphor-react-native';
import React, { useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigate } from '../../hooks/useRouter';
import { useUser } from '../../hooks/useUser';
import { usePassword } from '../../hooks/usePassword';

import {
  Box,
  Container,
  Form,
  Separator,
  Link,
  Heading,
  LinkButton,
  Row,
  ButtonHighlight,
  Center,
} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IFormProps {
  email: string;
  password: string;
}

export function Login() {
  const { handleChangePasswrodVisible, isPassword } = usePassword();
  const { push } = useNavigate();
  const { Login, isError } = useUser();
  const methods = useForm<IFormProps>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    (async () => {
      await AsyncStorage.removeItem('@user:social');
      await AsyncStorage.removeItem('@token:social');
    })();
  }, []);

  const onSubmit: SubmitHandler<IFormProps> = async (data) => {
    Login(data);
    if (isError) {
      methods.reset({ password: '' });
      return;
    }
    methods.reset();
    push('Home');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Heading>Social Media</Heading>
        <FormProvider {...methods}>
          <Form>
            <Input
              name='email'
              placeholder='Digite seu email'
              leftIcon={<User size={25} weight='bold' />}
            />
            <Separator />
            <Row>
              <Input
                name='password'
                placeholder='Digite seu password'
                leftIcon={<Password size={25} weight='bold' />}
                isPassword={isPassword}
              />
              <ButtonHighlight onPress={handleChangePasswrodVisible}>
                {isPassword ? (
                  <Eye size={20} weight='bold' />
                ) : (
                  <EyeSlash size={20} weight='bold' />
                )}
              </ButtonHighlight>
            </Row>

            <Separator />
            <Box>
              <LinkButton onPress={() => push('Create')}>
                <Link>Cadastre-se</Link>
              </LinkButton>
            </Box>
            <Center>
              <Button
                onPress={methods.handleSubmit(onSubmit)}
                title='Entrar'
                variant='solid'
              />
            </Center>
          </Form>
        </FormProvider>
      </Container>
    </TouchableWithoutFeedback>
  );
}
