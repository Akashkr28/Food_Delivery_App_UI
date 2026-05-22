import React, { createContext, useContext, useMemo, useState } from 'react';

const UserContext = createContext(null);

const defaultUser = {
  name: 'Akash Kumar',
  email: 'akash@example.com',
  mobile: '+91 98765 43210',
  address: 'Bengaluru, India'
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(defaultUser);

  const value = useMemo(
    () => ({
      user,
      updateUser: (updates) => setUser((current) => ({ ...current, ...updates }))
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}
