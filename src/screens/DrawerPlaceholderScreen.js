import React from 'react';
import { Text } from 'react-native';

import { Screen } from '../components/Screen';
import { styles } from '../styles/sharedStyles';

export function DrawerPlaceholderScreen({ route }) {
  return (
    <Screen>
      <Text style={styles.title}>{route.name}</Text>
      <Text style={styles.bodyText}>Drawer destination for {route.name.toLowerCase()}.</Text>
    </Screen>
  );
}
