// how to display lists on screen ??
import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';

// flatlist element - turns an array into a list of elements

const ListScreen = () =>{

    // this is an array of objects
    const friends = [
        {name: 'friend1'},
        {name: 'friend2'},
        {name: 'friend3'},
        {name: 'friend4'},
        {name: 'friend5'},
        {name: 'friend6'},
        {name: 'friend7'},
        {name: 'friend8'},
        {name: 'friend9'},
    ];
    // Method 1
    // const friends = [
    //     // key should be unique and string
    //     {name: 'friend1',key:'1'},
    //     {name: 'friend2',key:'2'},
    //     {name: 'friend3',key:'3'},
    //     {name: 'friend4',key:'4'},
    //     {name: 'friend5',key:'5'},
    //     {name: 'friend6',key:'6'},
    //     {name: 'friend7',key:'7'},
    //     {name: 'friend8',key:'8'},
    //     {name: 'friend9',key:'9'},
    // ];
    // return <Text>ListScreen</Text>;
    // render item is function that will be applied on each item of friends array
    // return (
    //     <FlatList 
    //     data={friends} 
    //     // element === {item: {name: 'Friend #1' }, index: 0}
    //     // remderItem = { (element) =>{ }}
    //     renderItem={({item}) =>{
    //         return <Text>{item.name}</Text>;
    //     }}/>
    // );
    return (
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend)=> (friend.name)} // name property is our key
        data={friends} 
        // element === {item: {name: 'Friend #1' }, index: 0}
        // remderItem = { (element) =>{ }}
        renderItem={({item}) =>{
            return <Text style={styles.textHorizontalSpacing}>{item.name}</Text>;
        }}/>
    );
   
};

// problem in first method is if we make change then 
//it will delete and reload whole list. So we use a key.
// key creates mapping between RN element and data
// its related to optimization related to updates of list
// we got that virtualized list error becoz RN assumes that we gonna change that list




const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    },
    textHorizontalSpacing:{
        marginHorizontal: 20
    }

});

export default ListScreen;