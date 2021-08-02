import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import ReelsScreen from "../screens/ReelsScreen";

const Stack = createStackNavigator();

export default function ReelsRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Reels"
        component={ReelsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
