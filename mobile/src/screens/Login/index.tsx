import { Password, User } from 'phosphor-react-native';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigate } from '../../hooks/useRouter';

import { Box, Container, Form, Separator, Link } from './styles';

interface IFormProps {
  email: string;
  password: string;
}

export function Login() {
  const { push } = useNavigate();
  const methods = useForm<IFormProps>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<IFormProps> = async (data) => {
    console.log(data);
    methods.reset();
    push('Home');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <FormProvider {...methods}>
          <Form>
            <Input
              name='email'
              placeholder='Digite seu email'
              leftIcon={<User size={25} weight='bold' />}
            />
            <Separator />
            <Input
              name='password'
              placeholder='Digite seu password'
              leftIcon={<Password size={25} weight='bold' />}
            />
            <Separator />
            <Box>
              <TouchableOpacity onPress={() => push('Create')}>
                <Link>Cadastre-se</Link>
              </TouchableOpacity>
            </Box>
            <Button
              onPress={methods.handleSubmit(onSubmit)}
              title='Entrar'
              variant='solid'
            />
          </Form>
        </FormProvider>
      </Container>
    </TouchableWithoutFeedback>
  );
}
