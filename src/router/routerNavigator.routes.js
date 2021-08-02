import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import StoryScreen from "../screens/StoryScreen";
import BottomHomeNavigator from "./bottomHomeNavigator.routes";

const RootStack = createStackNavigator();

export default function Router() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        component={BottomHomeNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Story"
        component={StoryScreen}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}
