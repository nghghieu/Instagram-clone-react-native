import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import SplashRoutes from "./src/router/splashNavigator.routes";
import { Provider } from "react-redux";
import { store } from "./auth/store";

export default function App() {
  return (
    <Provider store={store}>
      {/* <NavigationContainer> */}
      <StatusBar barStyle="dark-content" />
      <SplashRoutes />
      {/* </NavigationContainer> */}
    </Provider>
  );
}
