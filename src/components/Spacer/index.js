import React from "react";
import { View, Text } from "react-native";

const Spacer = (props) => {
  const { top, right, bottom, left } = props;

  return (
    <View
      style={{
        marginTop: top,
        marginLeft: left,
        marginRight: right,
        marginBottom: bottom,
      }}
    ></View>
  );
};

export default Spacer;
