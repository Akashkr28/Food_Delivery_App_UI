import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawerContent } from '../components/CustomDrawerContent';
import { DrawerPlaceholderScreen } from '../screens/DrawerPlaceholderScreen';
import { MainTabsNavigator } from './MainTabsNavigator';
import { colors } from '../theme/colors';

const Drawer = createDrawerNavigator();

export function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      id="MainDrawer"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.dark,
        drawerLabelStyle: { fontWeight: '700' }
      }}
    >
      <Drawer.Screen name="HomeTabs" component={MainTabsNavigator} options={{ title: 'Home' }} />
      <Drawer.Screen name="My Orders" component={DrawerPlaceholderScreen} />
      <Drawer.Screen name="Settings" component={DrawerPlaceholderScreen} />
      <Drawer.Screen name="Help" component={DrawerPlaceholderScreen} />
    </Drawer.Navigator>
  );
}
