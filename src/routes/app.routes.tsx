import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'native-base'
import React from 'react'
import { Platform } from 'react-native'
import HistorySvg from '../assets/history.svg'
import HomeSvg from '../assets/home.svg'
import ProfileSvg from '../assets/profile.svg'
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

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export default function AppRoutes() {
  const { sizes, colors } = useTheme()
  const iconSize = sizes[7]

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.green[500],
      tabBarInactiveTintColor: colors.gray[200],
      tabBarStyle: {
        backgroundColor: colors.gray[600],
        borderTopWidth: 0,
        height: Platform.OS === 'android' ? 'auto' : 96,
        paddingBottom: sizes[10],
        paddingTop: sizes[6]
      }
    }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <HomeSvg fill={color} width={iconSize} height={iconSize} />
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => <HistorySvg fill={color} width={iconSize} height={iconSize} />
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <ProfileSvg fill={color} width={iconSize} height={iconSize} />
        }}
      />
      <Screen
        options={{ tabBarButton: () => null }}
        name="exercise"
        component={Exercise}
      />
    </Navigator>
  )
}