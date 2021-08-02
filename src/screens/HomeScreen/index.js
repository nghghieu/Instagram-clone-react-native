import React from "react";
import { View } from "react-native";
import Feed from "../../components/Feed";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Feed />
    </View>
  );
};

export default HomeScreen;
