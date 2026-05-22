import React, { createContext, useContext, useMemo, useState } from 'react';

const OrderContext = createContext(null);

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const value = useMemo(
    () => ({
      orders,
      addOrder: (items) => {
        const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const order = {
          id: `ORD-${Date.now()}`,
          items,
          status: 'Confirmed',
          total,
          placedAt: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })
        };

        setOrders((current) => [order, ...current]);
      },
      clearOrders: () => setOrders([])
    }),
    [orders]
  );

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrders() {
  return useContext(OrderContext);
}
