import {View, Text, Image} from 'react-native';

const ChatBgSkeleton = () => {
  return (
    <View className="basis-[93%] space-y-14 w-full flex flex-col justify-center items-center">
      <View className="flex flex-col justify-center items-center gap-2">
        <Image
          source={require('../../assets/images/app_logo.png')}
          className="w-16 h-16"
        />
        <Text className="text-gray-400 text-h4 font-urbBold">Capabilities</Text>
      </View>
      <View className="w-[85%] flex flex-col justify-center items-center gap-4">
        <View className="bg-gray-100 rounded-2xl w-full">
          <Text className="text-gray-500 px-2 py-4 text-bodyL font-urbMed text-center">
            Answer all your questions.{'\n'} (Just ask me anything you like!)
          </Text>
        </View>
        <View className="bg-gray-100 rounded-2xl w-full">
          <Text className="text-gray-500 px-2 py-4 text-bodyL font-urbMed text-center">
            Generate all the text you want.{'\n'} (essays, articles, reports,
            stories, & more)
          </Text>
        </View>
        <View className="bg-gray-100 rounded-2xl w-full">
          <Text className="text-gray-500 px-2 py-4 text-bodyL font-urbMed text-center">
            Conversational AI.{'\n'} (I can talk to you like a natural human)
          </Text>
        </View>
        <Text className="text-gray-500 px-2 py-4 text-bodyL font-urbMed text-center">
          These are just a few examples of what I can do.
        </Text>
      </View>
    </View>
  );
};

export default ChatBgSkeleton;
