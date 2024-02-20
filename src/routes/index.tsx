import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { Box, useTheme } from 'native-base'
import React from 'react'
import AppRoutes from './app.routes'


export default function Routes() {
  const { colors } = useTheme()
  const theme = DefaultTheme

  theme.colors.background = colors.gray[700]

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        <AppRoutes />
      </NavigationContainer>
    </Box>
  )
}