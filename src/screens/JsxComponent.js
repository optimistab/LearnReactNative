import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const JsxComponent = () =>{

    const yourname = <Text>'abhay'</Text>;
    return(
        <View>
            <Text style={styles.textSize}>
                Getting started with react native !!
            </Text>
            <Text>
                My name is {yourname}
            </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    textSize: {
        fontSize: 45
    }
});

export default JsxComponent;