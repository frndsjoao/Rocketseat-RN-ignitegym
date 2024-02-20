import * as FileSystem from 'expo-file-system'
import * as ImagePicker from 'expo-image-picker'
import { Center, Heading, ScrollView, Skeleton, Text, VStack, useToast } from 'native-base'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import ScreenHeader from '../components/ScreenHeader'
import UserPhoto from '../components/UserPhoto'

const PHOTO_SIZE = 32


export default function Profile() {
  const [photoLoading, setPhotoLoading] = useState(false)
  const [userPhoto, setUserPhoto] = useState('https://github.com/frndsjoao.png')

  const toast = useToast()

  async function handlePhotoSelect() {
    setPhotoLoading(true)

    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,                                     // Qualidade de compressão: 0 a 1
        aspect: [4, 4],                                 // Aspecto de envio (tamanho)
        allowsEditing: true,                            // Habilita a edição
        // base64: true,                                // Retorna o base64 da imagem
      })

      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri)

        if (photoInfo.size && (photoInfo.size / 1024 / 1024) > 15) {
          return toast.show({
            title: 'Essa imagem é muito grande. Escolha uma de até 15mb.',
            placement: 'top',
            bgColor: 'red.500'
          })
        }

        setUserPhoto(photoSelected.assets[0].uri)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setPhotoLoading(false)
    }
  }

  return (
    <>
      <ScreenHeader title='Perfil' />
      <ScrollView contentContainerStyle={{ paddingBottom: 12 }}>
        <Center mt={6} px={10}>
          {photoLoading
            ? <Loader />
            : (
              <UserPhoto
                source={{ uri: userPhoto }}
                alt='Foto de perfil'
                size={PHOTO_SIZE}
              />
            )}

          <TouchableOpacity onPress={handlePhotoSelect}>
            <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input
            placeholder='Nome'
            bg="gray.600"
          />
          <Input
            placeholder='E-mail'
            bg="gray.600"
            value='joaofernandes.dev@hotmail.com'
            isDisabled
          />
        </Center>

        <VStack px={10} mt={10} mb={10}>
          <Heading color="gray.200" fontSize="md" mb={2} fontFamily="heading">
            Alterar senha
          </Heading>

          <Input
            secureTextEntry
            placeholder='Senha antiga'
            bg="gray.600"
          />
          <Input
            secureTextEntry
            placeholder='Nova senha'
            bg="gray.600"
          />
          <Input
            secureTextEntry
            placeholder='Confirme a nova senha'
            bg="gray.600"
          />

          <Button title='Atualizar' mt={4} />
        </VStack>
      </ScrollView>
    </>
  )
}

function Loader() {
  return (
    <Skeleton w={PHOTO_SIZE} h={PHOTO_SIZE} rounded="full" />
  )
}