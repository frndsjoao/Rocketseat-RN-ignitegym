import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Exercise from '../screens/Exercise'
import History from '../screens/History'
import Home from '../screens/Home'
import Profile from '../screens/Profile'

type AppRoutes = {
  home: undefined;
  profile: undefined;
  history: undefined;
  exercise: undefined;
}

// export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name="home" component={Home} />
      <Screen name="history" component={History} />
      <Screen name="profile" component={Profile} />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  )
}