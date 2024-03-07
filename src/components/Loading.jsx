import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import Logo from '../assets/svgs/logo.svg';

const Loading = () => {
  return (
    <View className="flex-1 relative justify-center items-center bg-white space-y-6">
      <Logo width={100} height={100} />
      <Text className="font-urbBold text-gray-900 text-h2">Quik AI</Text>
      <ActivityIndicator
        className="absolute bottom-24"
        size={'large'}
        color={'#7E92F8'}
      />
    </View>
  );
};

export default Loading;
