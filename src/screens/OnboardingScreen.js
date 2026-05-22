import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { AppButton } from '../components/AppButton';
import { Screen } from '../components/Screen';
import { styles } from '../styles/sharedStyles';
import { colors } from '../theme/colors';

export function OnboardingScreen({ navigation }) {
  return (
    <Screen>
      <View style={[styles.banner, { backgroundColor: colors.dark }]}>
        <Ionicons name="bicycle" size={64} color={colors.warning} />
        <Text style={styles.bannerText}>Fresh meals, clear routes, quick delivery.</Text>
      </View>
      <Text style={styles.title}>Good food is one tap away</Text>
      <Text style={styles.bodyText}>
        Explore restaurants, open details with route params, and keep your cart moving through the stack.
      </Text>
      <AppButton title="Get Started" icon="arrow-forward" onPress={() => navigation.replace('HomeList')} />
    </Screen>
  );
}
