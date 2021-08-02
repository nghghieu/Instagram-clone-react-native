import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Image } from "react-native";
import "react-native-gesture-handler";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function HomeRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          headerLeft: () => {
            return <Ionicons name="camera-outline" size={25}></Ionicons>;
          },
          headerRight: () => {
            return (
              <Ionicons name="paper-plane-outline" size={25} color="#545454" />
            );
          },
          headerTitle: () => {
            return (
              <Image
                style={{ width: 135, marginLeft: 55, height: 50 }}
                resizeMode="contain"
                source={require("../../assets/images/logo.png")}
              />
            );
          },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerRightContainerStyle: {
            marginRight: 15,
          },
        })}
      />
    </Stack.Navigator>
  );
}
