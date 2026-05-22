import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { AppButton } from '../components/AppButton';
import { Screen } from '../components/Screen';
import { useAuth } from '../context/AuthContext';
import { styles } from '../styles/sharedStyles';
import { colors } from '../theme/colors';

export function LoginScreen() {
  const { signIn } = useAuth();

  return (
    <Screen>
      <View style={styles.heroCircle}>
        <Ionicons name="fast-food" size={74} color={colors.white} />
      </View>
      <Text style={styles.kicker}>FoodApp</Text>
      <Text style={styles.title}>Sign in to order faster</Text>
      <Text style={styles.bodyText}>
        This mock login persists locally, so reloading the app returns you to the authenticated navigation flow.
      </Text>
      <View style={styles.loginCard}>
        <View style={styles.loginRow}>
          <Ionicons name="person-circle-outline" size={22} color={colors.primary} />
          <View>
            <Text style={styles.cardTitle}>Demo User</Text>
            <Text style={styles.metaText}>akash@example.com</Text>
          </View>
        </View>
        <View style={styles.loginRow}>
          <Ionicons name="lock-closed-outline" size={22} color={colors.primary} />
          <View>
            <Text style={styles.cardTitle}>Mock Password</Text>
            <Text style={styles.metaText}>No real backend required</Text>
          </View>
        </View>
      </View>
      <AppButton title="Login" icon="log-in-outline" onPress={signIn} />
    </Screen>
  );
}
