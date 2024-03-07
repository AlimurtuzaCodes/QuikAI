import {View, Text, Pressable} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Logo from '../assets/svgs/logo.svg';
import {AppwriteContext} from '../services/appwrite/AppwriteContext';
const ProfileTab = () => {
  const [user, setUser] = useState({});
  const {authService, setIsLoggedIn} = useContext(AppwriteContext);
  const handleLogout = () => {
    authService.logoutUser().then(res => {
      if (res) {
        setIsLoggedIn(false);
      }
    });
  };
  useEffect(() => {
    authService.getCurrentUser().then(res => setUser(res));
  }, []);
  return (
    <View className="flex-1 bg-white flex justify-center items-center">
      <Logo width={50} height={50} />
      <Text className="font-urbBold text-gray-900 text-h5 mt-10 text-center">
        {user.name}
      </Text>
      <Text className="font-urbMed text-gray-900 text-bodyXL text-center">
        {user.email}
      </Text>
      <Pressable
        onPress={handleLogout}
        className="absolute bottom-8 py-4 px-8 bg-red flex justify-center items-center rounded-full">
        <Text className="font-urbBold text-white text-bodyL">Logout</Text>
      </Pressable>
    </View>
  );
};

export default ProfileTab;
