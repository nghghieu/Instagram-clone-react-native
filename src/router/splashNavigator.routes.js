import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import MainRouter from ".";
import SplashScreenPreview from "../screens/SplashScreenPreview";

const Stack = createStackNavigator();

export default function SplashRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreenPreview}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainRouter"
          component={MainRouter}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
