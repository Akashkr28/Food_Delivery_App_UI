import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Screen } from '../components/Screen';
import { styles } from '../styles/sharedStyles';
import { colors } from '../theme/colors';

const trendingItems = ['Paneer tikka', 'Ramen bowl', 'Cold coffee'];

export function SearchScreen() {
  return (
    <Screen>
      <Text style={styles.title}>Search</Text>
      <View style={styles.searchBox}>
        <Ionicons name="search" size={22} color={colors.muted} />
        <Text style={styles.metaText}>Search biryani, sushi, salads...</Text>
      </View>
      <Text style={styles.sectionTitle}>Trending</Text>
      {trendingItems.map((item) => (
        <View style={styles.listItem} key={item}>
          <Text style={styles.cardTitle}>{item}</Text>
          <Ionicons name="chevron-forward" size={18} color={colors.muted} />
        </View>
      ))}
    </Screen>
  );
}
