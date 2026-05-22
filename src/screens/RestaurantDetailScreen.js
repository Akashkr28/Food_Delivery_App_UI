import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { AppButton } from '../components/AppButton';
import { Screen } from '../components/Screen';
import { useCart } from '../context/CartContext';
import { restaurants } from '../data/restaurants';
import { styles } from '../styles/sharedStyles';
import { colors } from '../theme/colors';

export function RestaurantDetailScreen({ route, navigation }) {
  const { addItem } = useCart();
  const restaurantId = route.params?.restaurantId ?? '123';
  const fallback = restaurants.find((item) => item.id === restaurantId) ?? restaurants[0];
  const name = route.params?.name ?? fallback.name;
  const price = route.params?.price ?? fallback.price;

  const addToCart = () => {
    addItem({ id: restaurantId, name, price });
    navigation.navigate('Cart', { name, price });
  };

  return (
    <Screen>
      <View style={[styles.detailHero, { backgroundColor: fallback.color }]}>
        <Ionicons name="restaurant-outline" size={74} color={colors.white} />
      </View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.bodyText}>
        Route params received: restaurant name "{name}" and item price Rs {price}. This screen also supports direct
        deep links with restaurant id {restaurantId}.
      </Text>
      <View style={styles.infoPill}>
        <Ionicons name="star" size={18} color={colors.warningIcon} />
        <Text style={styles.infoText}>{fallback.rating} rating - {fallback.eta}</Text>
      </View>
      <AppButton title={`Add Rs ${price} item to Cart`} icon="cart-outline" onPress={addToCart} />
      <AppButton title="Go Back" icon="arrow-back" variant="secondary" onPress={() => navigation.goBack()} />
    </Screen>
  );
}
