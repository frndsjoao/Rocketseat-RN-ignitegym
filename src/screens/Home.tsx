import { useNavigation } from '@react-navigation/native'
import { FlatList, HStack, Heading, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import ExerciseCard from '../components/ExerciseCard'
import Group from '../components/Group'
import HomeHeader from '../components/HomeHeader'
import { AppNavigatorRoutesProps } from '../routes/app.routes'

export default function Home() {
  const [groupSelected, setGroupSelected] = useState('costas')
  const [groups, setGroups] = useState(['costas', 'peito', 'biceps'])
  const [exericises, setExercises] = useState(['Supino', 'Remada', 'Levantamento'])

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleViewExercise() {
    navigation.navigate('exercise')
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        horizontal
        showsVerticalScrollIndicator={false}
        my={10}
        maxH={10}
        minH={10}
        _contentContainerStyle={{ px: 8 }}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={String(groupSelected).toLocaleUpperCase() === String(item).toLocaleUpperCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exericises.length}
          </Text>
        </HStack>

        <FlatList
          data={exericises}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
          renderItem={({ item }) => (<ExerciseCard onPress={handleViewExercise} />)}
        />

      </VStack>
    </VStack>
  )
}