import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';


const ImageDetail=(props)=>{
    // console.log(props);
    return (
    <View>
        <Image source={props.imageSource}></Image>
        <Text>{props.title}  ImageScore - {props.imageScore} </Text>
        <Text>ImageScore - {props.imageScore} </Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ImageDetail;

// Props - System to pass data from a parent to a child
// State - System to track a piece of data that will chaange
// over time.If the data changes,our app will 'rerender'


// State
// 1. we are using function based state in a functional component.
// React also has class-based components that have access to state

// 2. we never directly modify a state variable.react doesnot detect this change
// only use the 'setter' function
//3.We can name the state variable anything we wish
//4.We can track any kind of data that changes over time- a number,string,array of objects etc
//5.when a component is rerendered, all of its children get rerendered too.
//6.A state variable can be passed to a child component. At that point,the state variable is now being used as props
