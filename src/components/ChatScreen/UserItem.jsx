import {View, Text} from 'react-native';

const UserItem = ({item}) => {
  return (
    <View className="w-[75%] p-4 rounded-t-2xl my-2 self-end bg-primaryDark rounded-bl-2xl rounded-br-md">
      <Text className="text-h6 font-urbMed tracking-wide  text-white">
        {item.parts[0].text === '' ? 'Generating...' : item.parts[0].text}
      </Text>
    </View>
  );
};

export default UserItem;
