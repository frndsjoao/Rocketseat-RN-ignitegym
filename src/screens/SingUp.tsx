import { useNavigation } from '@react-navigation/native'
import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base'
import React from 'react'
import backgroundImg from '../assets/background.png'
import LogoSvg from '../assets/logo.svg'
import Button from '../components/Button'
import Input from '../components/Input'

export default function SignUp() {
  const navigation = useNavigation()

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

          <Input
            placeholder='Nome'
          />
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
          <Button title='Criar e acessar' />
        </Center>

        <Button
          mt={32}
          title='Voltar para o login'
          variant="outline"
          onPress={() => navigation.goBack()}
        />

      </VStack>
    </ScrollView>
  )
}