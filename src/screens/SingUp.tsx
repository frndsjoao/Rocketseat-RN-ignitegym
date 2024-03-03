import { useNavigation } from '@react-navigation/native'
import { Center, Heading, Image, ScrollView, Text, VStack, useToast } from 'native-base'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import backgroundImg from '../assets/background.png'
import LogoSvg from '../assets/logo.svg'
import Button from '../components/Button'
import Input from '../components/Input'

import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '../services/api'
import { AppError } from '../utils/AppError'

type FormData = yup.InferType<typeof signUpSchema>

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome.'),
  email: yup.string().required('Informe o email.').email('E-mail inválido.'),
  password: yup.string().required('Informe a senha.').min(6, 'Senha deve possuir pelo menos 6 caracteres.'),
  password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password')], 'As senhas não conferem.'),
})

export default function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(signUpSchema),
  })
  const navigation = useNavigation()
  const toast = useToast()

  async function handleSignUp({ name, email, password }: FormData) {
    try {
      const response = await api.post('/users', { name, email, password })

    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível criar a conta. Tente novamente mais tarde.'

      toast.show({
        title,
        _title: { fontSize: 'md' },
        placement: 'top',
        bgColor: 'red.500',
      })
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10}>
        <Image
          source={backgroundImg}
          defaultSource={backgroundImg}
          alt='Pessoas treinando'
          resizeMode='contain'
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Nome'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
                bg="gray.600"
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='E-mail'
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
                bg="gray.600"
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                secureTextEntry
                placeholder='Senha'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
                bg="gray.600"
              />
            )}
          />
          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <Input
                secureTextEntry
                placeholder='Confirme sua enha'
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType='send'
                errorMessage={errors.password_confirm?.message}
                bg="gray.600"
              />
            )}
          />

          <Button
            mt={8}
            title='Criar e acessar'
            onPress={handleSubmit(handleSignUp)}
          />
        </Center>

        <Button
          mt={20}
          title='Voltar para o login'
          variant="outline"
          onPress={() => navigation.goBack()}
        />

      </VStack>
    </ScrollView>
  )
}