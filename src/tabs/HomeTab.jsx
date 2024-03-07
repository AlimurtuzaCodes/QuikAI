import {View, Text, Pressable} from 'react-native';
import Logo from '../assets/svgs/logo.svg';
const HomeTab = ({navigation}) => {
  return (
    <View className="flex-1 relative bg-white flex justify-center items-center">
      <Logo width={100} height={100} />
      <Text className="font-urbBold text-gray-900 text-h2 mt-4 mb-10 text-center">
        Welcome to{'\n'}Quik AI 👋
      </Text>
      <Text className="font-urbReg text-gray-700 text-bodyL text-center">
        Start chatting with ChattyAI now.{'\n'}You can ask me anything.
      </Text>
      <Pressable
        onPress={() => {
          navigation.navigate('ChatScreen');
        }}
        className="w-[90%] absolute bottom-8 py-4 bg-primary flex justify-center items-center rounded-full">
        <Text className="font-urbBold text-white text-h6">Start Chat</Text>
      </Pressable>
    </View>
  );
};

export default HomeTab;
