import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function LoginScreen({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                navigation.navigate('Feed');
            })
            .catch(error => {
                console.log(error);
                
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

            <TouchableWithoutFeedback onPress={handleLogin}>
                <View style={styles.button}>
                    <Text style={{ color: 'white' }}>Login</Text>
                </View>
            </TouchableWithoutFeedback>

            <Text style={styles.text} onPress={()=>navigation.navigate("Signup")}>Create an account</Text>
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
