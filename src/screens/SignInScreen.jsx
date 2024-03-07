import {View, Text, Pressable, KeyboardAvoidingView} from 'react-native';
import TextField from '../components/TextField';
import {useContext, useState} from 'react';
import {AppwriteContext} from '../services/appwrite/AppwriteContext';
import {showSnackBar} from '../components/Utils';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const {authService, setIsLoggedIn} = useContext(AppwriteContext);

  const onChangeEmailField = value => {
    setEmail(value);
  };
  const onChangePassField = value => {
    setPass(value);
  };

  const handleSignIn = () => {
    if (!email) {
      showSnackBar('Email Address Field is Empty!');
    } else if (!pass) {
      showSnackBar('Password Field is Empty!');
    } else {
      const user = {
        email: email,
        password: pass,
      };
      authService.loginUser(user).then(res => {
        if (res) {
          setIsLoggedIn(true);
        }
      });
    }
  };

  return (
    <KeyboardAvoidingView className="w-full h-full bg-white px-6 flex justify-around items-center">
      <View className="w-full flex items-start space-y-2">
        <Text className="font-urbBold text-gray-900 text-h3 text-start">
          Welcome Back 👋
        </Text>
        <Text className="font-urbReg text-gray-900 text-h6 text-start">
          Please enter your email & password{'\n'}to log in.
        </Text>
      </View>
      <View className="w-full">
        <TextField
          label={'Email Address'}
          value={email}
          onChangeText={onChangeEmailField}
        />
        <TextField
          label={'Password'}
          value={pass}
          onChangeText={onChangePassField}
        />
      </View>
      <Pressable
        onPress={handleSignIn}
        className="w-full py-4 bg-primary flex justify-center items-center rounded-full">
        <Text className="font-urbBold text-white text-h6">Sign In</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
