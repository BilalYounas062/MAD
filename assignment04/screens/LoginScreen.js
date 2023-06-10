import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LockScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchStoredData = async () => {
      try {
        // Fetch email and password from AsyncStorage
        const storedEmail = await AsyncStorage.getItem('email');
        const storedPassword = await AsyncStorage.getItem('password');

        if (storedEmail && storedPassword) {
          setEmail(storedEmail);
          setPassword(storedPassword);
        }
      } catch (error) {
        console.log('Error retrieving data: ', error);
      }
    };

    fetchStoredData();
  }, []);

  const handleUnlock = () => {
    if (email.trim() === '' || password.trim() === '') {
      // Email or password is empty
      alert('Please enter both email and password.');
    } else if (email === storedEmail && password === storedPassword) {
      // Correct email and password, navigate to HomeScreen
      navigation.navigate('HomeScreen');
    } else {
      // Incorrect email or password
      alert('Incorrect email or password. Please try again.');
    }
  };

  const handleSignup = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'green'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'green'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleUnlock} color="#841584" />
      <Button title="Sign Up" onPress={handleSignup} color="#337ab7" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'orange',
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderWidth: 4,
  },
});

export default LockScreen;
