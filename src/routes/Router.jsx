import {NavigationContainer} from '@react-navigation/native';
import {AppwriteContext} from '../services/appwrite/AppwriteContext';
import Loading from '../components/Loading';

//Routes
import {AuthStack} from './AuthStack';
import {AppStack} from './AppStack';
import {useContext, useEffect, useState} from 'react';

export const Router = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {authService, isLoggedIn, setIsLoggedIn} = useContext(AppwriteContext);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then(res => {
        setIsLoading(false);
        if (res) {
          setIsLoggedIn(true);
        }
      })
      .catch(_ => {
        setIsLoading(false);
        setIsLoggedIn(false);
      });
  }, [authService, setIsLoggedIn]);

  if (isLoading) return <Loading />;

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
