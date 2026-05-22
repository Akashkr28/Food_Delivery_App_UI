import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AUTH_KEY } from '../constants/storage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isReady, setIsReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const restoreAuth = async () => {
      const savedAuth = await AsyncStorage.getItem(AUTH_KEY);
      setIsAuthenticated(savedAuth === 'true');
      setIsReady(true);
    };

    restoreAuth();
  }, []);

  const value = useMemo(
    () => ({
      isReady,
      isAuthenticated,
      signIn: async () => {
        await AsyncStorage.setItem(AUTH_KEY, 'true');
        setIsAuthenticated(true);
      },
      signOut: async () => {
        await AsyncStorage.removeItem(AUTH_KEY);
        setIsAuthenticated(false);
      }
    }),
    [isAuthenticated, isReady]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthState() {
  const { isReady, isAuthenticated } = useAuth();
  return { isReady, isAuthenticated };
}
