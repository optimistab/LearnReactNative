import React,{useReducer} from 'react';
import {Text,StyleSheet,View,Button} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

// these states are extremely related so we can think of 'reducer' - function that manages chnages to an object
// it is a function that gets called with two objects.
// whatever the reduces returns, it is used as state value
// 1.we never change argument#1 directly 
//2.we must always return a value to be used as Argument#1

// action part by convention - type, payload
const reducer = (state,action) => {
    // state === object {red: number, green:number,blue: number}
    // action === {colortochange: , amount:}
    // action === {type: {change_red,change_blue,change_green},payload:}

    switch (action.colorToChange) {
        case 'red':
            return state.red + action.amount> 255 || state.red + action.amount<0
                ? state
                :{...state,red: state.red+action.amount};
        case 'green':
            return state.green + action.amount>255 || state.green + action.amount<0
            ? state
            :{...state,green: state.green+action.amount};
            // return {...state,green: state.green+action.amount};
        case 'blue':
            return state.blue + action.amount>255 || state.blue + state.amount<0
            ? state
            :{...state,blue:state.blue+action.amount};
        default:
            return state;
    }
};
const SquareScreen =() =>{

    const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0});
    const {red,green,blue} = state;
    // console.log(red);
    console.log(state);

    return (
        <View>
            <ColorCounter 
            // onIncrease={() =>{
            //     if(red + COLOR_INCREMENT > 255){
            //         return 
            //     }
            //     setRed(red+COLOR_INCREMENT)} } bad approach becoz of repetitive code
            onIncrease={() => dispatch({colorToChange:'red',amount:COLOR_INCREMENT})} 
            onDecrease={() => dispatch({colorToChange:'red',amount: -1*COLOR_INCREMENT})}
            color="Red"></ColorCounter>
            <ColorCounter 
            onIncrease={() => dispatch({colorToChange:'blue',amount:COLOR_INCREMENT})} 
            onDecrease={() => dispatch({colorToChange:'blue',amount: -1*COLOR_INCREMENT})}
            color="Blue"></ColorCounter>
            <ColorCounter 
            onIncrease={() => dispatch({colorToChange:'green',amount:COLOR_INCREMENT})} 
            onDecrease={() => dispatch({colorToChange:'green',amount: -1*COLOR_INCREMENT})}
            color="Green"></ColorCounter>

            <View style={{ height:150, width:150,
                backgroundColor: `rgb(${red},${green},${blue})`}} >
            </View>
        </View>
    );

};

// const SquareScreen =() =>{

//     const [red,setRed] = useState(0);
//     const [green,setGreen] = useState(0);
//     const [blue,setBlue] = useState(0);

//     // console.log(red);
//     const setColor = (color,change) =>{
        
//         switch(color){
//            case 'red': 
//            red + change > 255 || red + change <0 ? null:setRed(red + change);
//             // if(red + change > 255 || red + change <0){
//             //     return;
//             // }else{
//             //     setRed(red + change);
//             // }
//             return;

//             case 'green': 
//            green + change > 255 || green + change <0 ? null:setGreen(green + change);
//            return;
//            case 'blue': 
//            blue + change > 255 || blue + change <0 ? null:setBlue(blue + change);
//            return;
//            default:
//                return;
//         }
        

//     };

//     return (
//         <View>
//             <ColorCounter 
//             // onIncrease={() =>{
//             //     if(red + COLOR_INCREMENT > 255){
//             //         return
//             //     }
//             //     setRed(red+COLOR_INCREMENT)} } bad approach becoz of repetitive code
//             onIncrease={() =>setColor('red',COLOR_INCREMENT)} 
//             onDecrease={() =>setColor('red',-1 * COLOR_INCREMENT)}
//             color="Red"></ColorCounter>
//             <ColorCounter 
//             onIncrease={() =>setColor('blue'+COLOR_INCREMENT)} 
//             onDecrease={() =>setColor('blue'-COLOR_INCREMENT)}
//             color="Blue"></ColorCounter>
//             <ColorCounter 
//             onIncrease={() =>setColor('green'+COLOR_INCREMENT)} 
//             onDecrease={() =>setColor('green'-COLOR_INCREMENT)}
//             color="Green"></ColorCounter>

//             <View style={{ height:150, width:150,
//                 backgroundColor: `rgb(${red},${green},${blue})`}} >
//             </View>
//         </View>
//     );

// };

const styles = StyleSheet.create({
    text: {
        fontSize: 30
      }
});

export default SquareScreen;

// if a child needs to change a state value,the parent can pass down a 
// callback function to change the state value as a prop