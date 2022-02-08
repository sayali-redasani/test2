import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./screens/HomeScreen"
import ImageScreen from "./screens/ImageScreen"


export default class App extends React.Component {

 render() {
   return(
     <AppContainer/>
   )
}

}
const AppSwitchNavigator = createSwitchNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
    ImageScreen: {
      screen: ImageScreen
    }
  },
  {
    initialRouteName: "HomeScreen"
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);

