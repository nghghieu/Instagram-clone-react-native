import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import ActiveScreenProfileToPost from "../screens/ActiveScreenProfileToPost";
import ActivityScreen from "../screens/ActivityScreen";
import ProfileActivityScreen from "../screens/ProfileActivityScreen";

const Stack = createStackNavigator();

export default function ActivityRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          headerStyle: {
            backgroundColor: "#fff",
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileActivityScreen}
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#fff",
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
