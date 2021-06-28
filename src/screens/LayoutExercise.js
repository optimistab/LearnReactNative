import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


const LayoutExercise = () =>{

    console.log('abhay');

    return (
        // <View style={styles.viewStyle}>
        //     <Text style={styles.textStyle}> BoxScreen</Text>
        // </View>
        <View style={styles.viewStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
        

    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,flexDirection:'row',
        justifyContent:'space-between',

    },
    viewOneStyle:{
        height:50,width:50,
        backgroundColor: 'red'
    },
    viewTwoStyle:{
        height:50,width:50,
        backgroundColor: 'green',
        // marginTop:50
        // alignSelf:'flex-end'
        top:50
    },
    viewThreeStyle:{
        height:50,width:50,
        backgroundColor: 'blue'
    }
});

export default LayoutExercise;