import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function SignupScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Feed');
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}

        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableWithoutFeedback onPress={handleSignup}>
        <View style={styles.button}>
          <Text style={{color:'white'}}>Signup</Text>
        </View>
      </TouchableWithoutFeedback>

      <Text style={styles.text} onPress={()=>navigation.goBack()}>Back to login</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text:{
    color:'black',marginTop:20
},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  button: {
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: 'rgba(11,87,247,1.0)',
    height: 40,
    width: '100%',
  },

});
