import React, { createContext } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

  const currentUserContext = {
    authenticated: false,
    user: null,
  };
  
  return <UserContext.Provider value={currentUserContext}>
    {children}
  </UserContext.Provider>
};

export default UserContextProvider;
