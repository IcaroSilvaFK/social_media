import React from 'react'
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form'
import { At, Eye, EyeSlash, Password, User } from 'phosphor-react-native'


import {useUser} from '../../hooks/useUser'
import {usePassword} from '../../hooks/usePassword'
import {useNavigate} from '../../hooks/useRouter'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

import {Container,Form,ButtonHighlight,Separator,Box,Anchor,AnchorText, Heading,Row} from './styles'


interface IFormProps {
  username: string;
  email: string;
  password: string;
}

export function CreateAccount() {
  const {handleChangePasswrodVisible,isPassword} = usePassword();
  const { push } =useNavigate()
  const methods = useForm<IFormProps>()
  const {Create,isError} = useUser()

  const onSubmit:SubmitHandler<IFormProps> = async data => {
    Create(data);
    if(isError) return;
    methods.reset();
    push('Home')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Heading>Social Media</Heading>
        <FormProvider {...methods}>
          <Form>
            <Input 
              name='email'
              placeholder='Digite aqui seu email'
              leftIcon={<At size={20} weight="bold" />}
            />
            <Separator/>
            <Input 
              name='username'
              placeholder='Digite seu nome de usuário'
              leftIcon={<User size={20} weight="bold" />}
            />
            <Separator/>
            
            <Row>
              <Input 
                name='password'
                placeholder='Digite sua senha'
                leftIcon={<Password size={20} weight="bold" />}
                isPassword={isPassword}
              /> 
              <ButtonHighlight onPress={handleChangePasswrodVisible}>
                {
                  isPassword ? 
                  (
                    <Eye size={20} weight="bold" />
                  ): (
                    <EyeSlash size={20} weight="bold" />
                  )
                }
            </ButtonHighlight>
            </Row>
            
            <Separator/>
            <Box>
              <Button
                title="Criar usuário"
                onPress={methods.handleSubmit(onSubmit)}
                variant="solid"
              />
            </Box>
            <Separator/>
            <Box>
              <Anchor onPress={() => push('Login')}>
                <AnchorText>Já possui conta? Clique aqui.</AnchorText>
              </Anchor>
            </Box>
          </Form>
        </FormProvider>
      </Container>
    </TouchableWithoutFeedback>
  )
}