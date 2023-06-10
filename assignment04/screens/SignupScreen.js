import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async () => {
    if (
      username.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === '' ||
      city.trim() === '' ||
      address.trim() === '' ||
      email.trim() === ''
    ) {
      Alert.alert('Error', 'Please fill in all the fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match. Please try again.');
      return;
    }

    try {
      // Create a user object with the form data
      const user = {
        username,
        email,
        password,
        city,
        address,
      };

      // Store the user object in AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(user));

      // Navigate to the HomeScreen
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log('Error saving user data: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={'black'}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'black'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'black'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor={'black'}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        placeholderTextColor={'black'}
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        placeholderTextColor={'black'}
        multiline
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Signup" onPress={handleSignup} />
      <Button
        title="Go back to Login Screen"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'yellow',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 10,
    borderWidth: 4,
  },
});

export default SignupScreen;
