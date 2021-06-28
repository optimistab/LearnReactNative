import React from 'react';
import {Text,StyleSheet,View,Button} from 'react-native';



const ColorCounter =({color,onIncrease,onDecrease}) =>{

    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={()=> onIncrease()}title={`Increase ${color}`}></Button>
            <Button onPress={()=>onDecrease()}title={`Decrease ${color}`}></Button>
        </View>
    );

};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
      }
});

export default ColorCounter;

// Generally,we create state variables in the most parent component
// that needs to read or change a state value