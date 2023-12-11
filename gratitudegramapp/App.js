import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
// import ForgotPasswordPage from './ForgotPasswordPage'; 
import WordBank from './WordBank';
import AccountPage from './AccountPage';
import EmojiBank from './EmojiBank';  

 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Sign In" component={LoginScreen} />
        <Stack.Screen name="AccountPage" component={AccountPage} />
        {/* <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage} /> */}
        <Stack.Screen name="WordBank" component={WordBank} />
        <Stack.Screen name="EmojiBank" component={EmojiBank} />
        {/* Add more screens (e.g., Home) as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
