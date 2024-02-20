import { Center, Heading } from 'native-base'
import React from 'react'

type Props = {
  title: string
}

export default function ScreenHeader({ title }: Props) {
  return (
    <Center bg="gray.600" pt={16} pb={6} px={8} alignItems="center">
      <Heading color="gray.100" fontSize="xl" fontFamily="heading">
        {title}
      </Heading>
    </Center>
  )
}