import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TextName = ({ name }) => {
  return (
    <TouchableOpacity>
      <Text style={{ fontWeight: "bold" }}>{name}</Text>
    </TouchableOpacity>
  );
};

export default TextName;
