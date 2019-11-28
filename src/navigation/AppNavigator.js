import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";

import SignIn from "../screens/Auth/SignIn";
import MainAuth from "../screens/Auth";
import SignUp from "../screens/Auth/SignUp";

const AuthStack = createStackNavigator(
  {
    MainIndex: MainAuth,
    SignIn: SignIn,
    SignUp: SignUp
  },
  {
    defaultNavigationOptions: {
      headerStyle: { borderBottomColor: "white" }
    }
  }
);

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth: AuthStack,
    Main: MainTabNavigator
  })
);
