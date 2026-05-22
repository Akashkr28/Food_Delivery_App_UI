import React from 'react';
import { Text, View } from 'react-native';

import { Screen } from '../components/Screen';
import { useOrders } from '../context/OrderContext';
import { styles } from '../styles/sharedStyles';

export function MyOrdersScreen() {
  const { orders } = useOrders();

  return (
    <Screen>
      <Text style={styles.title}>My Orders</Text>
      <Text style={styles.bodyText}>All orders placed from Cart or Orders appear here.</Text>

      {orders.length === 0 ? (
        <View style={styles.emptyOrderCard}>
          <Text style={styles.cardTitle}>No orders yet</Text>
          <Text style={styles.metaText}>Place an order and it will be listed in this drawer section.</Text>
        </View>
      ) : (
        orders.map((order) => (
          <View style={styles.orderCard} key={`drawer-${order.id}`}>
            <View style={styles.rowBetween}>
              <View>
                <Text style={styles.cardTitle}>{order.id}</Text>
                <Text style={styles.metaText}>{order.placedAt} - {order.status}</Text>
              </View>
              <Text style={styles.priceText}>Rs {order.total}</Text>
            </View>
            {order.items.map((item, index) => (
              <Text style={styles.orderItemText} key={`${order.id}-${item.id}-${index}`}>
                {item.name} x {item.quantity} - Rs {item.price * item.quantity}
              </Text>
            ))}
          </View>
        ))
      )}
    </Screen>
  );
}
