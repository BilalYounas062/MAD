import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,ImageBackground} from 'react-native';

const LockScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUnlock = () => {
    navigation.navigate('HomeScreen');
  };

  const handleSignup = () => {
    navigation.navigate('SignupScreen');
  };

  return (   
     <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email" placeholderTextColor={'green'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password" placeholderTextColor={'green'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="Login"
        onPress={handleUnlock}
        color="#841584" 
      />
      <Button
        title="Sign Up"
        onPress={handleSignup}
        color="#337ab7" 
      />
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'orange',
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderWidth:4,
  },
});

export default LockScreen;
