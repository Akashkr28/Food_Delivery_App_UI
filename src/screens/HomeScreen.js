import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Screen } from '../components/Screen';
import { useUser } from '../context/UserContext';
import { restaurants } from '../data/restaurants';
import { styles } from '../styles/sharedStyles';
import { colors } from '../theme/colors';

export function HomeScreen({ navigation }) {
  const { user } = useUser();

  return (
    <Screen>
      <View style={styles.homeHero}>
        <View style={styles.heroAddressRow}>
          <View style={styles.heroAddressText}>
            <Text style={styles.heroKicker}>Deliver to</Text>
            <Text style={styles.heroTitle}>{user.address}</Text>
          </View>
          <View style={styles.heroIcon}>
            <Ionicons name="location" size={24} color={colors.white} />
          </View>
        </View>
        <Text style={styles.heroSubtitle}>Hot meals, fast routes, and restaurant picks near you.</Text>
      </View>

      <View style={styles.offerRow}>
        <View style={[styles.offerCard, { backgroundColor: '#FFF3D9' }]}>
          <Ionicons name="pricetag" size={22} color="#B7791F" />
          <Text style={styles.offerTitle}>40% off</Text>
          <Text style={styles.offerText}>on first order</Text>
        </View>
        <View style={[styles.offerCard, { backgroundColor: '#E8F7F0' }]}>
          <Ionicons name="time" size={22} color={colors.success} />
          <Text style={styles.offerTitle}>Express</Text>
          <Text style={styles.offerText}>under 25 min</Text>
        </View>
      </View>

      <View style={styles.chipRow}>
        {['Popular', 'Near you', 'Offers', 'Top rated'].map((label) => (
          <View style={styles.chip} key={label}>
            <Text style={styles.chipText}>{label}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Popular Restaurants</Text>
      {restaurants.map((item) => (
        <Pressable
          key={item.id}
          onPress={() =>
            navigation.navigate('RestaurantDetail', {
              restaurantId: item.id,
              name: item.name,
              price: item.price
            })
          }
          style={({ pressed }) => [styles.restaurantCard, pressed && styles.pressed]}
        >
          <View style={[styles.restaurantImage, { backgroundColor: item.color }]}>
            <Ionicons name="restaurant" size={34} color={colors.white} />
          </View>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.metaText}>{item.cuisine}</Text>
            <View style={styles.restaurantMetaRow}>
              <Ionicons name="star" size={14} color={colors.warningIcon} />
              <Text style={styles.metaText}>{item.rating}</Text>
              <Ionicons name="time-outline" size={14} color={colors.muted} />
              <Text style={styles.metaText}>{item.eta}</Text>
            </View>
          </View>
          <Text style={styles.priceText}>Rs {item.price}</Text>
        </Pressable>
      ))}
    </Screen>
  );
}
