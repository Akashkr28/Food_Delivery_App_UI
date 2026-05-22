import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthNavigator } from './AuthNavigator';
import { MainDrawerNavigator } from './MainDrawerNavigator';

const Stack = createNativeStackNavigator();

export function RootNavigator({ isAuthenticated }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
      {isAuthenticated ? (
        <Stack.Screen name="MainApp" component={MainDrawerNavigator} />
      ) : (
        <Stack.Screen name="LoginFlow" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
}
