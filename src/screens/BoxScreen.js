import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


const BoxScreen = () =>{

    console.log('abhay');

    return (
        // <View style={styles.viewStyle}>
        //     <Text style={styles.textStyle}> BoxScreen</Text>
        // </View>
        <View style={styles.flexboxviewStyle}>
            <Text style={styles.flexboxonetextStyle}> Child 1</Text>
            <Text style={styles.flexboxtwotextStyle}> Child 2</Text>
            <Text style={styles.flexboxthreetextStyle}> Child 3</Text>
        </View>
        

    );
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 4,
        borderColor: 'black'
    },
    textStyle:{
        borderColor: 'red',
        borderWidth: 4, // border on all sides
        marginVertical: 20 , // top and bottom margins
        marginHorizontal: 10,
        padding: 4
    },
    // Child - flex,alignSelf
    flexboxonetextStyle:{
        borderWidth:3,
        borderColor: 'red',
        flex : 4,
    },
    flexboxtwotextStyle:{
        borderWidth:3,
        borderColor: 'red',
        // flex : 4, // take as much space as it can
         //alignSelf: 'center',
     //   position: 'absolute',
        fontSize: 20,
        ...StyleSheet.absoluteFillObject
       // top: 0,left:0,right:0,bottom:0 // top , bottom,left,right
    },
    flexboxthreetextStyle:{
        borderWidth:3,
        borderColor: 'red',
        flex : 6,
    },
    // Parent - alignItems,justifyContent,flexDirection
    // by default,align items is stretch, alignSelf overwrites it for child elements

    flexboxviewStyle:{
        borderWidth: 4,
        borderColor: 'black',
        //alignItems: 'flex-start', // flex-start,cemter,flex-end
        // flexDirection: 'row',
        height: 200,
       // justifyContent: 'center', // space-between.space-around,center
        // flexDirection: 'row'
    },

});
export default BoxScreen;