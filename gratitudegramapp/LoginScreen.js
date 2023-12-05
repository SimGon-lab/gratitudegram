import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from "./styles";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement authentication logic here
    // For simplicity, just navigate to a home screen on successful login
    navigation.navigate('AccountPage');
    console.log(username);
  };

  return (
    <View style={styles.loginBackground}>
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
      </View>
    </View>
  );
};

export default LoginScreen;
