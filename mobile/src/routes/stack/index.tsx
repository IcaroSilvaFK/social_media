import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../../screens/Login';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name='Login' component={Login} />
    </Navigator>
  );
}
