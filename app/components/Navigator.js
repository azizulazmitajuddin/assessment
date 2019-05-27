import { createStackNavigator, createAppContainer } from "react-navigation";
import { connect } from "react-redux";
import { Text } from "react-native";

import FirstScreen from "./First";
import SecondScreen from "./Second";

const Navigator = new createStackNavigator(
  {
    First: { screen: FirstScreen },
    Second: { screen: SecondScreen }
  },
  {
    initialRouteName: "First",
    headerMode: "none"
  }
);

const AppNavigator = createAppContainer(Navigator);

export default AppNavigator;
