import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import JsxComponent from "./src/screens/JsxComponent";
import ListScreen from "./src/screens/ListScreen";
import ListScreenTest from "./src/screens/ListScreenTest";
import ImageScreeen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import CounterScreenReducer from "./src/screens/CounterScreenReducer";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import LayoutExercise from "./src/screens/LayoutExercise";
const navigator = createStackNavigator(  // this is an object that shows what
  // are we going to show in our screen at any point of time

  // createStackNavigator is a function

  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Jsx: JsxComponent,
    List: ListScreen,
    ListTest: ListScreenTest,
    ViewImage:ImageScreeen,
    Counter:CounterScreen,
    Colordesign:ColorScreen,
     Square:SquareScreen,
     CounterReducer:CounterScreenReducer,
     TextInput:TextScreen,
     Box:BoxScreen,
    Layouthomework:LayoutExercise
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);


// State

// 1.We are using function based state in a functional component.
//React also has class-based components that have access to state
// 2.we never directly modify a state variable.React doesnot detect this change.Oly use the setter function
//3. We can name the state variable anything we wish
//4.We can track any kind of data that changes over time - a number,string,array of objects
//5.when a component is rerendered,all of its children get rerendered too
// 6. A state variable can be passed to a child component. At that point,the state variable is now being used as props

