import React,{useState}from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';


const CounterScreen = () =>{
    
    // let counter =0; component dosenot change its value
    const[counter,setCounter]=useState(0);

    // when this component is called again,counter doesnot gets initialized again but comes woth updated value

    // don't worry, every copy of it will have its own state variable
    
    return(
        <View>
            <Button title="Increase" onPress={() => {
                // counter++;
                // console.log(counter);
                // Don't directly change the value of state variable
                setCounter(counter+1);
            }}></Button>
            <Button title="Decrease" onPress={() =>{
                // counter--;
                // console.log(counter);
                setCounter(counter-1);
            }}></Button>
            <Text> Current Count: {counter}</Text>
        </View>
    );
};


const styles= StyleSheet.create({
    text: {
        fontSize: 30
      }
});

export default CounterScreen;

// A hook is a function that adds some new functionlaity 
// to a function component like - useState