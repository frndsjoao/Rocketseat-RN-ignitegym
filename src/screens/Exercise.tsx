import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Box, HStack, Heading, Icon, Image, ScrollView, Text, VStack } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Button from '../components/Button'

import BodySvg from '../assets/body.svg'
import RepetitionsSvg from '../assets/repetitions.svg'
import SeriesSvg from '../assets/series.svg'

const SOURCE = 'https://blog.gsuplementos.com.br/wp-content/uploads/2021/04/iStock-1246046696.jpg'

export default function Exercise() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }


  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={16}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name='arrow-left' color="green.500" size={6} />
        </TouchableOpacity>

        <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
          <Heading fontSize="lg" fontFamily="heading" color="gray.100" flexShrink={1}>
            Puxada frontal
          </Heading>

          <HStack alignItems="center">
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack p={8}>
          <Image
            source={{ uri: SOURCE }}
            alt='Imagem do exercício'
            resizeMode='cover'
            w="full"
            h={80}
            rounded="lg"
            mb={4}
          />

          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack alignItems="center" justifyContent="space-around" mb={6} mt={6}>
              <HStack alignItems="center">
                <SeriesSvg />
                <Text color="gray.200" ml={2}>
                  3 séries
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text color="gray.200" ml={2}>
                  12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>

        </VStack>
      </ScrollView>
    </VStack>
  )
}