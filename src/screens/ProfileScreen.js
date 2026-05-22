import React from 'react';
import { Image, Text, View } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import { AppButton } from '../components/AppButton';
import { Screen } from '../components/Screen';
import { useUser } from '../context/UserContext';
import { useLogout } from '../hooks/useLogout';
import { styles } from '../styles/sharedStyles';

export function ProfileScreen({ navigation }) {
  const logout = useLogout();
  const { user } = useUser();

  const openDrawer = () => {
    navigation.getParent('MainDrawer')?.dispatch(DrawerActions.openDrawer());
  };

  return (
    <Screen>
      <View style={styles.profileHeader}>
        <Image source={{ uri: 'https://i.pravatar.cc/160?img=12' }} style={styles.avatarLarge} />
        <Text style={styles.titleSmall}>{user.name}</Text>
        <Text style={styles.metaText}>{user.mobile}</Text>
        <Text style={styles.metaText}>{user.email}</Text>
      </View>
      <AppButton title="Open Profile Drawer" icon="menu" onPress={openDrawer} />
      <AppButton title="Logout" icon="log-out-outline" variant="secondary" onPress={logout} />
    </Screen>
  );
}
