import {View, Text, TextInput} from 'react-native';
import React from 'react';

const TextField = ({label, value, onChangeText}) => {
  return (
    <View className="w-full space-y-3 my-3">
      <Text className="font-urbBold text-gray-900 text-bodyL pl-1">
        {label}
      </Text>
      <TextInput
        className="py-3 border border-1 border-gray-500 rounded-full font-urbMed text-gray-800 text-h5 px-6"
        cursorColor={'#9E9E9E'}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextField;
