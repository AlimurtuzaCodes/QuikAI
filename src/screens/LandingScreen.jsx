import {View, Text, ImageBackground, Button, Pressable} from 'react-native';
import React from 'react';

const LandingScreen = ({navigation}) => {
  return (
    <View className="w-full h-full bg-white">
      <ImageBackground
        className="flex-1 flex justify-evenly items-center"
        source={require('../assets/images/background.png')}
        blurRadius={90}>
        <Text className="font-urbBold text-gray-900 text-h2 text-center">
          Welcome to{'\n'} Quik AI
        </Text>
        <View className="w-full px-6 space-y-6">
          <Pressable
            onPress={() => navigation.navigate('SignIn')}
            className="w-full py-4 bg-primary flex justify-center items-center rounded-full">
            <Text className="font-urbBold text-white text-h6">Sign In</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('SignUp')}
            className="w-full py-4 bg-white flex justify-center items-center rounded-full">
            <Text className="font-urbBold text-primary text-h6">Sign Up</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LandingScreen;
