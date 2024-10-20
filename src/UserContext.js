// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from './firebase'; 

const UserContext = createContext();

// Custom hook for using the user context
export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user ? user : null);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => {
    auth.signOut().then(() => {
      setUser(null); // Reset the user state after logging out
    }).catch((error) => {
      console.error("Error during logout:", error);
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
