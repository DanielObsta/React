import React from "react";
import {View, Text, StyleSheet, Image, Linking,TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const twitter = <Icon name={'twitter'} size={30} color={'black'}/>
const instagram = <Icon name={'instagram'} size={30} color={'black'}/>
const linkedin = <Icon name={'linkedin'} size={30} color={'black'}/>
const google = <Icon name={'google'} size={30} color={'black'}/>
const spotify = <Icon name={'spotify'} size={30} color={'black'}/>
const youtube = <Icon name={'youtube'} size={30} color={'black'}/>

const ProfileCard = () => {
    const user = {
        avatar: "https://wallpapercave.com/wp/wp2882300.jpg",
        coverPhoto: "https://wallpapercave.com/wp/wp13341247.jpg",
        name: "Daniel Obstancias"
    }
    return (
        <View style={styles.container}>
            <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto}/>
            <View style={styles.avatarContainer}>
                <Image source={{uri: user.avatar}} style={styles.avatar}/>
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>

                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://open.spotify.com/')
                }}>
                    {spotify}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://www.youtube.com/')
                }}>
                    {youtube}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://instagram.com/')
                }}>
                    {instagram}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://linkedin.com/')}>
                    {linkedin}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://mail.google.com/mail/')}>
                    {google}
                </TouchableWithoutFeedback>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        alignItems: 'center' //flex y grid
    },
    coverPhoto: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'

    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -75
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 10,
        borderColor: 'white'
    },
    name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '60%',
        justifyContent: 'space-between'
    }
});
export default ProfileCard