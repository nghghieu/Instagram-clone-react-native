import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import "react-native-gesture-handler";
import ActivityRoutes from "./activityNavigator.routes";
import DiscoveryRoutes from "./discoveryNavigator.routes";
import HomeRoutes from "./home.routes";
import ProfileRoutes from "./profileNavigator.routes";
import ReelsRoutes from "./reelsNavigator.routes";

const Tab = createMaterialBottomTabNavigator();

export default function BottomHomeNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeRoutes}
        options={{
          tabBarLabel: false,
          tabBarColor: "white",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="home" size={26} />
            ) : (
              <Ionicons name="home-outline" size={26} />
            ),
        }}
      />
      <Tab.Screen
        name="Discovery"
        component={DiscoveryRoutes}
        options={{
          tabBarLabel: false,
          tabBarColor: "white",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="search" size={26} />
            ) : (
              <Ionicons name="search-outline" size={26} />
            ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelsRoutes}
        options={{
          tabBarLabel: false,
          tabBarColor: "white",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="film" size={26} />
            ) : (
              <Ionicons name="film-outline" size={26} />
            ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ActivityRoutes}
        options={{
          tabBarLabel: false,
          tabBarColor: "white",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="heart" size={26} />
            ) : (
              <Ionicons name="heart-outline" size={26} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileRoutes}
        options={{
          tabBarLabel: false,
          tabBarColor: "white",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="person" size={26} />
            ) : (
              <Ionicons name="person-outline" size={26} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
