import React, {useState}from 'react';
import {Text,StyleSheet,View,Button,TextInput} from 'react-native';


// text inputs with state in react
// callback is used to communicate from child to parent. parent don't communicate with child
function CheckLength({price}){
    if({price}.CheckLength){
        return true;
    }
    else return false;
};
// everytime u use a text input, we need this state and callback thing
const TextScreen=() =>{
    // console.log('abhy');
    const [name,setName]= useState('');
    const [password,setPassword]= useState('');

    return (
        <View>
            <Text>Enter name : </Text>
            <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setName(newValue)}></TextInput>

            <Text>My name is {name}</Text>

            <Text>Enter password :</Text>
            <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(newValue) => setPassword(newValue)}></TextInput>
            {password.length<5? 
            <Text>Password must be longer than 5 characters</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
      },
    ScreenAlign: {
        alignContent: 'center'
    },
    input:{
        margin:15,
        borderColor: 'black',
        borderWidth:1
    }
});


export default TextScreen;

