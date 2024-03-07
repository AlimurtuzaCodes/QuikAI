import {faCopy, faShareNodes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Clipboard from '@react-native-clipboard/clipboard';
import {View, Text, Pressable, TouchableOpacity, Share} from 'react-native';

const ModelItem = ({item}) => {
  const generatedText = item.parts[0].text;
  const copyToClipboard = () => {
    Clipboard.setString(generatedText);
  };
  const shareText = async () => {
    await Share.share({
      title: 'QuikAI',
      message: generatedText,
    });
  };

  return (
    <View className="flex flex-row justify-between items-center">
      <View className="w-[80%] p-4 rounded-t-2xl my-2 self-start bg-gray-100 rounded-br-2xl rounded-bl-md">
        <Text className="text-h6 font-urbMed tracking-wide text-gray-900">
          {generatedText === '' ? 'Generating...' : generatedText}
        </Text>
      </View>
      {generatedText && (
        <View className="flex-1 h-full pt-1 flex flex-col gap-4 justify-start items-center">
          <TouchableOpacity onPress={copyToClipboard}>
            <FontAwesomeIcon icon={faCopy} color="#BDBDBD" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={shareText}>
            <FontAwesomeIcon icon={faShareNodes} color="#BDBDBD" size={20} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ModelItem;
