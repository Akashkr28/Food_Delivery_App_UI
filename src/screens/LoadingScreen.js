import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { styles } from '../styles/sharedStyles';
import { colors } from '../theme/colors';

export function LoadingScreen() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color={colors.primary} />
    </View>
  );
}
