import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../tabs/HomeTab';
import ProfileTab from '../tabs/ProfileTab';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCommentDots, faUser} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = faCommentDots;
          } else {
            iconName = faUser;
          }
          return <FontAwesomeIcon icon={iconName} color={color} size={22} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#7E92F8',
        tabBarStyle: {
          elevation: 0,
          height: 70,
          backgroundColor: '#FFFFFF',
          borderTopColor: 'white',
        },
        tabBarItemStyle: {paddingVertical: 10},
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Urbanist_Medium',
        },
      })}>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Profile" component={ProfileTab} />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
