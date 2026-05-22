import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CartScreen } from '../screens/CartScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { RestaurantDetailScreen } from '../screens/RestaurantDetailScreen';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator();

export function RestaurantStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
        headerBackTitle: 'Back',
        headerTitleStyle: { fontWeight: '800' },
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ title: 'Welcome' }} />
      <Stack.Screen name="HomeList" component={HomeScreen} options={{ title: 'Food Delivery' }} />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
        options={({ route }) => ({
          title: route.params?.name ?? 'Restaurant',
          headerBackTitle: 'Restaurants',
          headerStyle: { backgroundColor: colors.secondary }
        })}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Your Cart',
          headerBackTitle: 'Restaurant',
          headerStyle: { backgroundColor: colors.success },
          animation: 'slide_from_bottom'
        }}
      />
    </Stack.Navigator>
  );
}
