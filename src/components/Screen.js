import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { styles } from '../styles/sharedStyles';

export function Screen({ children, scroll = true }) {
  if (!scroll) {
    return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>{children}</ScrollView>
    </SafeAreaView>
  );
}
