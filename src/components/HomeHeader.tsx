import { MaterialIcons } from '@expo/vector-icons'
import { HStack, Heading, Icon, Text, VStack } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import UserPhoto from './UserPhoto'

export default function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={6} px={8} alignItems="center">

      <UserPhoto
        source={{ uri: 'https://github.com/frndsjoao.png' }}
        alt='Foto de perfil'
        size={16}
        mr={4}
      />

      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá
        </Text>
        <Heading fontFamily="heading" color="gray.100" fontSize="md">
          João
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name='logout' color="gray.200" size={7} />
      </TouchableOpacity>

    </HStack>
  )
}