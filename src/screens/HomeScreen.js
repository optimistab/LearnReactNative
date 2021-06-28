import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity} from "react-native";
 // Text,View,Image,Button are RN elements
// const HomeScreen = (props) => {
  const HomeScreen = ({navigation}) => {
  // console.log(props);
  return (
    // for strings we can use text with " " these. No need of curly braces.
  <View>
    <Text style={styles.text}>Hello Abhay Agrawal !!</Text>
    <Button 
    onPress={() => navigation.navigate('Components')}
    title="Go to components demo">
      </Button> 

    <Button title="Go to list demo" 
    onPress={()=> navigation.navigate('List')}>
    </Button>

    <Button title="Go to Image demo" 
    onPress={()=> navigation.navigate('ViewImage')}>
    </Button>

    <Button title="Go to Counter demo" 
    onPress={()=> navigation.navigate('Counter')}>
    </Button>

    <Button title="Go to Color demo" 
    onPress={()=> navigation.navigate('Colordesign')}>
    </Button>

    <Button title="Go to Square demo" 
    onPress={()=> navigation.navigate('Square')}>
    </Button>

    <Button title="Go to CounterusingReducer demo" 
    onPress={()=> navigation.navigate('CounterReducer')}>
    </Button>

    <Button title="Go to text demo" 
    onPress={()=> navigation.navigate('TextInput')}>
    </Button>

    <Button title="Go to box demo" 
    onPress={()=> navigation.navigate('Box')}>
    </Button>

    <Button title="Go to Layouthomework demo" 
    onPress={()=> navigation.navigate('Layouthomework')}>
    </Button>

    {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text>Go to list demo1</Text>
      <Text>Go to list demo2</Text>
      <Text>Go to list demo2</Text>
    </TouchableOpacity> */}
  </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;



// !gdg##
