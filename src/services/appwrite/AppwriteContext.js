import React, {createContext, useState} from 'react';
import AuthService from './auth';

const AppContext = {
  authService: new AuthService(),
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

export const AppwriteContext = createContext(AppContext);

export const AppwriteProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const defaultValue = {
    authService: new AuthService(),
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  );
};
