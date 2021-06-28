import React from 'react'; // importing full React
import { Text,StyleSheet,View } from 'react-native'; // just importing some parts of react-native

const ComponentsScreen = () =>{  // arrow function

    const preeting = <Text> this is a JSX element</Text>
    const greeting = "hello reactnative i am coming";
    const treating = ['mango','apple','banana']; 
    // this return statement is very tricky
     return ( <View>   
         <Text style={styles.textStyle}>This is the Components Screen</Text>
         <Text>Hi abhay !!</Text>
         <Text>{greeting}</Text>
            {preeting}
         <Text>{treating[0]}</Text>
         </View>
     );

          // we cannot show a javascript object inside JSX using curly braces

    //return <Text style={{fontSize: 30}}>This is there Components Screen</Text>;
     // this is JSX
    // there is tool called babel which is converting this JSX into javascript. RN bundler uses babel.
    // we use JSX so that we don't have to make JS functions and also making changes becomes very easy
};

// we can assign JSX elements to a variable,
//then show that variable inside of a JSX block


// we can use this or pass styling directly into our element
const styles = StyleSheet.create({
    textStyle: {  // this is textStyle object

        fontSize: 30

    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;