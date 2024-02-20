import { Heading, SectionList, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import HistoryCard from '../components/HistoryCard'
import ScreenHeader from '../components/ScreenHeader'

const DATA = [
  {
    title: '18.02.2024',
    data: []
  }
]
export default function History() {
  const [exercises, setExercises] = useState([
    { title: '19.02.2024', data: ['Puxada frontal', 'Remada unilateral'] },
    { title: '18.02.2024', data: ['Puxada frontal', 'Remada unilateral'] },
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({ item }) => (<HistoryCard />)}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: "center" }}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercicios registrados ainda. {'\n'} Vamos treinar hoje?
          </Text>
        )}
      />
    </VStack>
  )
}