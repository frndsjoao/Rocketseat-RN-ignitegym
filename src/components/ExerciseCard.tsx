import { Entypo } from '@expo/vector-icons'
import { HStack, Heading, Icon, Image, Text, VStack } from 'native-base'
import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

const SOURCE = 'https://blog.gsuplementos.com.br/wp-content/uploads/2021/04/iStock-1246046696.jpg'

type Props = TouchableOpacityProps & {
}

export default function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
        <Image
          source={{ uri: SOURCE }}
          alt='Imagem do exercício'
          w={16}
          h={16}
          rounded="md"
          mr={4}
          resizeMode='cover'
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white">
            Supino inclinado
          </Heading>
          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />

      </HStack>
    </TouchableOpacity>
  )
}