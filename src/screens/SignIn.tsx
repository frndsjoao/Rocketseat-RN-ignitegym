import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base'
import React from 'react'
import backgroundImg from '../assets/background.png'
import LogoSvg from '../assets/logo.svg'
import Button from '../components/Button'
import Input from '../components/Input'

export default function SignIn() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg="gray.700" px={10}>
        <Image
          source={backgroundImg}
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

          <Input
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
          />
          <Input
            secureTextEntry
            placeholder='Senha'
          />
          <Button title='Acessar' />
        </Center>

        <Center mt={32}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">Ainda não tem acesso?</Text>

          <Button title='Criar conta' variant="outline" />
        </Center>

      </VStack>
    </ScrollView>
  )
}