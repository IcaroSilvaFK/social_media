import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, UserCircle } from 'phosphor-react-native';

import { Home } from '../../screens/Home';
import { theme } from '../../styles/theme';
import { CreateNewPostIconTabBar } from '../../components/CreateNewPostIconTabBar';
import { Profile } from '../../screens/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomRoutting() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: theme.colors.neutrals.white,
        tabBarActiveTintColor: theme.colors.neutrals.gray[300],
        tabBarStyle: {
          backgroundColor: theme.colors.brand[500],
        },
      }}
    >
      <Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <House size={size} weight='bold' color={color} />
          ),
        }}
      />
      <Screen
        name='CreatePost'
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <CreateNewPostIconTabBar isFocused={focused} />
          ),
        }}
      />
      <Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <UserCircle size={size} weight='bold' color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
