import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import ActiveScreenProfileToPost from "../screens/ActiveScreenProfileToPost";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

export default function ProfileRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: "",
          headerStyle: {
            elevation: 0,
          },
        }}
      />

      <Stack.Screen
        name="Post"
        component={ActiveScreenProfileToPost}
        options={{
          headerTitle: "Post",
          headerStyle: {
            backgroundColor: "#fff",
            elevation: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
}
