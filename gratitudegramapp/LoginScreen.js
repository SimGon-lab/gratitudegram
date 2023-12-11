import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import styles from "./styles";
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    // Implement authentication logic here
    //navigate to a home screen on successful login
    navigation.navigate('AccountPage');
  };
  return (
    <ScrollView style={styles.loginBackground}>
      <View style={styles.loginContainer}>
        <Text>Sign in</Text>
        <TextInput
          placeholder="Email"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Sign In" onPress={handleLogin} />
        <Button title="Forgot Password?" onPress={handleLogin} />
      </View>
    </ScrollView>
  );
};
export default LoginScreen;