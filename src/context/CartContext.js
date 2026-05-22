import React, { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const value = useMemo(
    () => ({
      items,
      totalQuantity: items.reduce((sum, item) => sum + item.quantity, 0),
      addItem: (item) =>
        setItems((current) => {
          const existingItem = current.find((cartItem) => cartItem.id === item.id);

          if (existingItem) {
            return current.map((cartItem) =>
              cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
          }

          return [...current, { ...item, quantity: 1 }];
        }),
      decreaseItem: (id) =>
        setItems((current) =>
          current
            .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
            .filter((item) => item.quantity > 0)
        ),
      increaseItem: (id) =>
        setItems((current) =>
          current.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
        ),
      removeItem: (id) => setItems((current) => current.filter((item) => item.id !== id)),
      removeItems: (ids) => setItems((current) => current.filter((item) => !ids.includes(item.id))),
      clearCart: () => setItems([])
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
