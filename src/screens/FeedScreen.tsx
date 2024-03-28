import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';

import firestore from '@react-native-firebase/firestore'
export default function FeedScreen({ navigation }: any) {
    const [posts, setPosts]: any = useState([]);

    useEffect(() => {
        const unsubscribe = firestore().collection('posts').orderBy('createdAt', 'desc').onSnapshot(snapshot => {

            const newPosts = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            console.log("skfjklsdjfklsjdfkl", newPosts)
            setPosts(newPosts);
        });

        return () => unsubscribe();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.text}>Feeds</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Post')}>
                    <Image style={styles.imageView} source={require("./../assets/images/img_Add.png")} />
                </TouchableWithoutFeedback>
            </View>

            <FlatList
                style={{ marginTop: 20 }}
                data={posts}
                renderItem={({ item }) =>
                    <View style={styles.listView}>
                        <Text style={{ padding: 10 }}>{item.content}</Text>
                    </View>

                }
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60,
    },
    text:{
        fontSize: 20, fontWeight: '500'
    },

    topView:{
        justifyContent: 'center', alignItems: 'center', width: '100%'
    },
    imageView:{
        position: 'absolute', right:20, height: 20, width: 20
    },
    listView:{
        marginBottom: 20, marginLeft: 20, marginRight: 20, backgroundColor: 'white', borderRadius: 8
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
