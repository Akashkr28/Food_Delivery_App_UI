import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { useLogout } from '../hooks/useLogout';
import { useUser } from '../context/UserContext';
import { colors } from '../theme/colors';
import { styles } from '../styles/sharedStyles';

export function CustomDrawerContent(props) {
  const logout = useLogout();
  const { user } = useUser();

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Image source={{ uri: 'https://i.pravatar.cc/160?img=12' }} style={styles.avatar} />
        <Text style={styles.drawerName}>{user.name}</Text>
        <Text style={styles.drawerEmail}>{user.email}</Text>
      </View>
      <DrawerItemList {...props} />
      <Pressable onPress={logout} style={styles.logoutItem}>
        <Ionicons name="log-out-outline" size={22} color={colors.primary} />
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
}
