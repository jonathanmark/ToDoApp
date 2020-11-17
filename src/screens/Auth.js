import React, {useState, useEffect} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

// import * as firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Optionally import the services that you want to use
// import "firebase/auth";
// import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// var firebaseConfig = {
//     apiKey: "AIzaSyAn75xxB4H_wWW0j7tefWn4w0UQjDufqlw",
//     authDomain: "todo-list-7b1df.firebaseapp.com",
//     databaseURL: "https://todo-list-7b1df.firebaseio.com",
//     projectId: "todo-list-7b1df",
//     storageBucket: "todo-list-7b1df.appspot.com",
//     messagingSenderId: "497898922057",
//     appId: "1:497898922057:web:5cc6e63cb71a5ec7d1df98",
//     measurementId: "G-HNV1LRG075"
//   };


// firebase.initializeApp(firebaseConfig);

const Auth = ({navigation}) => {

    // const [isRegistered, setisRegistered] = useState(false);
    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    function SignInUser(){
        navigation.navigate("ToDosScreen");
    };

    function RegisterUser(){
        try {
            console.log(email, password);
            firebase.auth().createUserWithEmailAndPassword(email, password)
        } catch (error) {
            
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>To Do App</Text>
            <View style= {styles.textInputStyle}>
                <AntDesign style={styles.iconStyle} name="mail" size={24} color="black"/>
                <TextInput
                    placeholder = 'e-mail'
                    autoCapitalize = 'none'
                    onChangeText = {(newValue) => {setemail(newValue)}}
                />
            </View>
            <View style= {styles.textInputStyle}>
                <AntDesign style={styles.iconStyle} name="key" size={24} color="black"/>
                <TextInput
                    placeholder = 'Password'
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    secureTextEntry = {true}
                    onChangeText = {(newValue) => {setpassword(newValue)}}
                />
            </View>
            <TouchableOpacity onPress={() => SignInUser()} >
                <View style = {styles.logInButton}>
                    <Text style={styles.buttonText}>Sign-In</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => RegisterUser()} >
                <View style = {styles.logInButton}>
                    <Text style={styles.buttonText}>Register</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        justifyContent:'center',
        padding:10,
    },

    textInputStyle: {
        marginVertical:10,
        flexDirection: 'row',
        height: 50,
        marginHorizontal: 25,
        backgroundColor: '#D3D3D3',
        borderRadius:5

    },

    logInButton:{
        marginVertical:10,
        marginHorizontal:25,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'green',
        borderRadius:50,
    },

    titleText:{
        fontWeight:'bold',
        fontSize:25,
        marginHorizontal: 25,
        alignSelf: 'center',
        paddingBottom:50
    },

    buttonText:{
        fontSize:15,
        color:'white',
        marginVertical:10
    },

    iconStyle:{
        alignSelf: 'center',
        marginHorizontal:10

    }

})

export default Auth;