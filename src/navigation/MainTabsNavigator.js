import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { useCart } from '../context/CartContext';
import { RestaurantStackNavigator } from './RestaurantStackNavigator';
import { OrdersScreen } from '../screens/OrdersScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { styles } from '../styles/sharedStyles';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

const tabIcons = {
  HomeTab: 'home',
  Search: 'search',
  Orders: 'receipt',
  Profile: 'person'
};

function tabBarStyleFor(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Onboarding';
  if (routeName === 'RestaurantDetail' || routeName === 'Cart') {
    return { display: 'none' };
  }

  return styles.tabBar;
}

export function MainTabsNavigator() {
  const { totalQuantity } = useCart();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarIcon: ({ color, size }) => <Ionicons name={tabIcons[route.name]} size={size} color={color} />
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={RestaurantStackNavigator}
        options={({ route }) => ({
          title: 'Home',
          tabBarStyle: tabBarStyleFor(route)
        })}
      />
      <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarStyle: styles.tabBar }} />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarBadge: totalQuantity > 0 ? totalQuantity : undefined,
          tabBarStyle: styles.tabBar
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarStyle: styles.tabBar }} />
    </Tab.Navigator>
  );
}
