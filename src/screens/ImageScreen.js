import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreeen=()=>{
    console.log("abay");
    return <View>
        {/* <Text>ImageScreeen</Text> */}
        <ImageDetail title="Forest"
        imageScore = {9}
        imageSource={require('../../assets/forest.jpg')}>
        </ImageDetail>
        <ImageDetail title="Beach" 
        imageScore = {7}
        imageSource={require('../../assets/beach.jpg')}></ImageDetail>
        <ImageDetail title="Mountain" 
        imageScore = {'4'}
        imageSource={require('../../assets/mountain.jpg')}></ImageDetail>
      
      
    </View>
    
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ImageScreeen;