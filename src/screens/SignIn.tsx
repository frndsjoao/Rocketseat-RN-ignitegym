import { useNavigation } from '@react-navigation/native'
import { Center, Heading, Image, ScrollView, Text, VStack, useToast } from 'native-base'
import React, { useState } from 'react'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import backgroundImg from '../assets/background.png'
import LogoSvg from '../assets/logo.svg'
import Button from '../components/Button'
import Input from '../components/Input'
import { useAuth } from '../hooks/useAuth'
import { AuthNavigatorRoutesProps } from '../routes/auth.routes'
import { AppError } from '../utils/AppError'

export default function SignIn() {
  const [loading, setLoading] = useState(false)

  const { control, handleSubmit, formState: { errors } } = useForm()
  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  const { signIn } = useAuth()
  const toast = useToast()

  async function handleLogin({ email, password }: FieldValues) {
    setLoading(true)
    try {
      await signIn(email, password)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError ? error.message : 'Não foi possível entrar. Tente novamente mais tarde.'

      setLoading(false)
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
            Acesse sua conta
          </Heading>

          <Controller
            control={control}
            name="email"
            rules={{ required: 'Informe o e-mail.' }}
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
            rules={{ required: 'Informe a senha.' }}
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
          <Button title='Acessar' onPress={handleSubmit(handleLogin)} />
        </Center>

        <Center mt={32}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">Ainda não tem acesso?</Text>

          <Button
            title='Criar conta'
            variant="outline"
            onPress={() => navigation.navigate('signUp')}
            isLoading={loading}
          />
        </Center>

      </VStack>
    </ScrollView>
  )
}