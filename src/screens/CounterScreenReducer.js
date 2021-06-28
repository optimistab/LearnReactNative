import React,{useReducer} from 'react';
import {Text,StyleSheet,View,Button} from 'react-native';

const VALUE_INCREMENT = 1;

const reducer = (state,action) =>{

    return {...state,value: state.value+action.amount};
}
const CounterScreenReducer =() =>{

    const [state,dispatch] = useReducer(reducer,{value :0});
    const {value} = state;
    return (
        <View>
            <Button title="Increase" onPress={()=>{
                dispatch({value,amount:VALUE_INCREMENT})
            }}>

            </Button>
            <Button title="Decrease" onPress={()=>{
                dispatch({value,amount:-1*VALUE_INCREMENT})
            }}>

            </Button>

            <Text style={StyleSheet.ScreenAlign}> Current Count: {value}</Text>
        </View>
    );
};

// npx expo-cli init food --npm


const styles = StyleSheet.create({
    text: {
        fontSize: 30
      },
    ScreenAlign: {
        alignContent: 'center'
    }
});

export default CounterScreenReducer;