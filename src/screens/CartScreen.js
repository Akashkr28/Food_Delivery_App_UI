import React, { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';

import { AppButton } from '../components/AppButton';
import { Screen } from '../components/Screen';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { styles } from '../styles/sharedStyles';
import { colors } from '../theme/colors';

export function CartScreen({ navigation }) {
  const { items, clearCart, decreaseItem, increaseItem, removeItem, removeItems } = useCart();
  const { addOrder } = useOrders();
  const [selectedIds, setSelectedIds] = useState([]);
  const selectedItems = useMemo(
    () => items.filter((item) => selectedIds.includes(item.id)),
    [items, selectedIds]
  );
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const selectedTotal = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const toggleItemSelection = (id) => {
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((selectedId) => selectedId !== id) : [...current, id]
    );
  };

  const toggleSelectAll = () => {
    setSelectedIds((current) => {
      const selectedCount = items.filter((item) => current.includes(item.id)).length;
      return selectedCount === items.length ? [] : items.map((item) => item.id);
    });
  };

  const handleDecrease = (item) => {
    decreaseItem(item.id);
    if (item.quantity === 1) {
      setSelectedIds((current) => current.filter((id) => id !== item.id));
    }
  };

  const handleRemove = (id) => {
    removeItem(id);
    setSelectedIds((current) => current.filter((selectedId) => selectedId !== id));
  };

  const placeOrder = (mode = 'all') => {
    const checkoutItems = mode === 'selected' ? selectedItems : items;

    if (checkoutItems.length === 0) {
      return;
    }

    addOrder(checkoutItems);
    if (mode === 'selected') {
      removeItems(checkoutItems.map((item) => item.id));
      setSelectedIds([]);
    } else {
      clearCart();
    }

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'HomeList' }]
      })
    );
  };

  return (
    <Screen>
      <Text style={styles.title}>Cart</Text>
      {items.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="cart-outline" size={54} color={colors.muted} />
          <Text style={styles.bodyText}>Your cart is empty. Add an item from a restaurant to show the Orders badge.</Text>
        </View>
      ) : (
        <>
          <View style={styles.cartToolbar}>
            <Pressable onPress={toggleSelectAll} style={styles.selectAllButton}>
              <Ionicons
                name={selectedItems.length === items.length ? 'checkbox' : 'square-outline'}
                size={20}
                color={colors.primary}
              />
              <Text style={styles.selectAllText}>{selectedItems.length === items.length ? 'Unselect all' : 'Select all'}</Text>
            </Pressable>
            <Text style={styles.metaText}>{selectedItems.length} selected</Text>
          </View>
          {items.map((item) => {
            const isSelected = selectedIds.includes(item.id);

            return (
              <View style={styles.cartItemCard} key={item.id}>
                <View style={styles.cartItemTopRow}>
                  <Pressable onPress={() => toggleItemSelection(item.id)} style={styles.cartCheckButton}>
                    <Ionicons
                      name={isSelected ? 'checkbox' : 'square-outline'}
                      size={24}
                      color={isSelected ? colors.primary : colors.muted}
                    />
                  </Pressable>
                  <View style={styles.cardText}>
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <Text style={styles.metaText}>Rs {item.price} each</Text>
                  </View>
                  <Pressable onPress={() => handleRemove(item.id)} style={styles.iconButton}>
                    <Ionicons name="trash-outline" size={20} color={colors.primary} />
                  </Pressable>
                </View>

                <View style={styles.cartControlsRow}>
                  <View style={styles.quantityControl}>
                    <Pressable onPress={() => handleDecrease(item)} style={styles.quantityButton}>
                      <Ionicons name="remove" size={18} color={colors.dark} />
                    </Pressable>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <Pressable onPress={() => increaseItem(item.id)} style={styles.quantityButton}>
                      <Ionicons name="add" size={18} color={colors.dark} />
                    </Pressable>
                  </View>
                  <Text style={styles.priceText}>Rs {item.price * item.quantity}</Text>
                </View>
              </View>
            );
          })}
        </>
      )}
      <View style={styles.totalRow}>
        <Text style={styles.sectionTitle}>Total</Text>
        <Text style={styles.totalText}>Rs {total}</Text>
      </View>
      {items.length > 0 ? (
        <>
          <Text style={styles.selectedTotalText}>Selected total: Rs {selectedTotal}</Text>
          <AppButton
            title="Order Selected Items"
            icon="checkmark-circle-outline"
            disabled={selectedItems.length === 0}
            onPress={() => placeOrder('selected')}
          />
          <AppButton title="Order All Items" icon="bag-check-outline" variant="secondary" onPress={() => placeOrder('all')} />
        </>
      ) : null}
    </Screen>
  );
}
