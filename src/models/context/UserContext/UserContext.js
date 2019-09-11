import React, { createContext, useEffect, useState } from 'react';
import { firebaseApp } from '@src/config/firebase';
import LaunchScreen from '@src/components/LaunchScreen/LaunchScreen';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

  const [ currentUserContext, setCurrentUserContext ] = useState({
    fetching: false,
    authenticated: false,
    user: null,
  });

  useEffect(() => {
    const unsubscribe = firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        setCurrentUserContext({
          fetching: true,
          authenticated: true,
          user,
        })
      } else {
        setCurrentUserContext({
          fetching: true,
          authenticated: false,
          user: null,
        })
      }
    });

    return () => {
      unsubscribe();
    };

  }, [currentUserContext.authenticated]);

  console.log('user context');
  
  return <UserContext.Provider value={currentUserContext}>
    {currentUserContext.fetching ? children : <LaunchScreen />}
  </UserContext.Provider>
};

export default UserContextProvider;
