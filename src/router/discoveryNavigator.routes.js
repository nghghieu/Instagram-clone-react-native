import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import DiscoveryDetailScreen from "../screens/DiscoveryDetailScreen";
import DiscoveryScreen from "../screens/DiscoveryScreen";

const Stack = createStackNavigator();

export default function DiscoveryRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discovery"
        component={DiscoveryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DiscoveryDetailScreen"
        component={DiscoveryDetailScreen}
        options={{ title: "Discovery" }}
      />
    </Stack.Navigator>
  );
}
