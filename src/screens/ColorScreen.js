import React,{useState} from 'react';
import {View,Text,StyleSheet,Button,FlatList} from 'react-native';

const ColorScreen = () =>{

    const [colors,setColors]=useState([]);
    console.log(colors);
    return (
    <View>
        <Button title='add a color' onPress={() => {
            setColors([...colors,randomRgb()]);
        }}></Button>
        
        {/* <View style={{height:100,width:100,
                    backgroundColor:randomRgb ()}}></View> */}
        <FlatList
            keyExtractor={(item) => item}
            data={colors}
            renderItem = {({item}) => {
                return(<View style={{height:100,width:100,
                    backgroundColor:item}}></View>)
            }}
        />    
    </View>
    );
};

//  backgroundColor:'rgb(0,255,0)'}}
const randomRgb = () =>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    //return 'rgb(${red},${green},${blue})';

    // backtick is used here.
    return `rgb(${red},${green},${blue})`;
}
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ColorScreen;