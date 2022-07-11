import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../../screens/Login';
import {CreateAccount} from '../../screens/CreateAccount'
import {BottomRoutting} from '../bottom'

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='Login' component={Login} />
      <Screen name='Create' component={CreateAccount} />
      <Screen name='Home' component={BottomRoutting} />
    </Navigator>
  );
}
