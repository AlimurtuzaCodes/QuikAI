import Snackbar from 'react-native-snackbar';

export const showSnackBar = title => {
  Snackbar.show({
    text: title,
    duration: Snackbar.LENGTH_SHORT,
  });
};
