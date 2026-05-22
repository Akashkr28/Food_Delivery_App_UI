import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawerContent } from '../components/CustomDrawerContent';
import { HelpScreen } from '../screens/HelpScreen';
import { MyOrdersScreen } from '../screens/MyOrdersScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { MainTabsNavigator } from './MainTabsNavigator';
import { colors } from '../theme/colors';

const Drawer = createDrawerNavigator();

export function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      id="MainDrawer"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.dark,
        drawerLabelStyle: { fontWeight: '700' }
      }}
    >
      <Drawer.Screen name="HomeTabs" component={MainTabsNavigator} options={{ title: 'Home', headerShown: false }} />
      <Drawer.Screen name="My Orders" component={MyOrdersScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
    </Drawer.Navigator>
  );
}
