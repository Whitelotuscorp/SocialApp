import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Alert, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

export default function PostScreen({ navigation }: any) {
    const [content, setContent] = useState('');

    const handlePost = () => {
        if (content === '') {
            Alert.alert("Alert", "Please enter message")
            return
        }
        const userId = auth().currentUser?.uid;
        firestore().collection('posts').add({
            userId,
            content,
            createdAt: firestore.FieldValue.serverTimestamp()
        })
            .then(() => {
                console.log('Post added!');
                navigation.goBack()
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.text}>Add Post</Text>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <Image style={styles.imageView} source={require("./../assets/images/img_Back.png")} />
                </TouchableWithoutFeedback>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Write something..."
                value={content}
                onChangeText={text => setContent(text)}
                multiline
            />
            <TouchableWithoutFeedback onPress={handlePost}>
                <View style={styles.button}>
                    <Text style={{ color: 'white' }}>Post</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 60,
        paddingLeft: 20,
        paddingRight: 20
    },
    text:{
        fontSize: 20, fontWeight: '500'
    },

    topView:{
        justifyContent: 'center', alignItems: 'center', width: '100%'
    },
    imageView:{
        position: 'absolute', left:0, height: 20, width: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '100%',
        height: 200,
        marginTop: 20
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: 'rgba(11,87,247,1.0)',
        height: 40,
        width: '100%',
    },

});
