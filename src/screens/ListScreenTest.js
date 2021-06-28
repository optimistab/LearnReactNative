import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';



const ListScreenTest =()=>{

    const friends = [
        {name: 'friend1',age:23},
        {name: 'friend2',age:13},
        {name: 'friend3',age:21},
        {name: 'friend4',age:20},
        {name: 'friend5',age:28},
        {name: 'friend6',age:20},
        {name: 'friend7',age:28},
        {name: 'friend8',age:25},
        {name: 'friend9',age:29},
        {name: 'friend10',age:23},
    ];
    return (
        <FlatList
        keyExtractor={(friend)=> (friend.name)}
        data={friends}
        renderItem={
            ({item})=>{
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }
        }
        
        />
        
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }

});




export default ListScreenTest;