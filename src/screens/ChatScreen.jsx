import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import ChatBgSkeleton from '../components/ChatScreen/ChatBgSkeleton';
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import ChatListView from '../components/ChatScreen/ChatListView';
import {generateText} from '../services/axios/geminiApi';

const ChatScreen = ({navigation}) => {
  const [generatedDataList, setGeneratedDataList] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = text => {
    setInputText(text);
  };

  const fetchData = async prompt => {
    try {
      const params = constructParams(prompt);
      const res = await generateText(params);
      createGeneratedDataList(res.data.candidates[0].content.parts);
    } catch (error) {
      createGeneratedDataList([
        {
          text: 'Something went wrong,Try again!',
        },
      ]);
    }
  };

  const constructParams = prompt => {
    const userObj = {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    };
    const modelObj = {
      role: 'model',
      parts: [
        {
          text: '',
        },
      ],
    };

    setGeneratedDataList(prev => [...prev, userObj, modelObj]);
    return {
      contents: [...generatedDataList, userObj],
    };
  };

  const createGeneratedDataList = data => {
    setGeneratedDataList(prev => {
      const lastIndex = prev.length - 1;
      const updatedModelObj = {
        role: 'model',
        parts: data,
      };
      return [...prev.slice(0, lastIndex), updatedModelObj];
    });
  };

  const handleSubmit = () => {
    Keyboard.dismiss();
    setInputText('');
    fetchData(inputText);
  };

  return (
    <View className="w-full h-screen relative bg-[#FFFFFF] flex flex-col justify-between items-center">
      <View className="basis-[7%] w-full flex flex-row justify-between items-center pl-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} size={22} />
        </TouchableOpacity>
        <Text className="text-gray-900 text-h4 font-urbBold flex-1 text-center pr-6">
          Quik AI
        </Text>
      </View>

      {generatedDataList.length === 0 ? (
        <ChatBgSkeleton />
      ) : (
        <ChatListView data={generatedDataList} />
      )}

      <KeyboardAvoidingView
        behavior="position"
        className="absolute bottom-0 left-0 right-0 z-10">
        <View className="flex flex-row justify-between items-center px-4 mb-8">
          <TextInput
            className="basis-[80%] py-4 bg-gray-100 rounded-2xl px-2 text-gray-900 text-h6 font-urbMed"
            onChangeText={handleInputChange}
            placeholderTextColor={'#9E9E9E'}
            value={inputText}
            placeholder="Ask me anything..."
          />
          <TouchableOpacity onPress={handleSubmit}>
            <View className="bg-primary w-14 h-14 rounded-full flex justify-center items-center">
              <FontAwesomeIcon icon={faPaperPlane} size={22} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;
