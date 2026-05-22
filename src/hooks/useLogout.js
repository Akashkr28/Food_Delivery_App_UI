import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';

export function useLogout() {
  const { signOut } = useAuth();
  const { clearCart } = useCart();
  const { clearOrders } = useOrders();

  return async function logout() {
    clearCart();
    clearOrders();
    await signOut();
  };
}
