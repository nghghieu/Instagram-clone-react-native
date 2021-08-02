import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../screens/AccountScreen/Login";
import MainScreen from "../screens/AccountScreen/MainScreen";
import Register from "../screens/AccountScreen/Register";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainAccount"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
