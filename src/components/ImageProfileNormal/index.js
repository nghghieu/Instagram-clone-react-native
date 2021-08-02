import React from "react";
import { View, Text, Image } from "react-native";

const ImageProfileNormal = ({ imageUri, size }) => {
  return (
    <Image
      resizeMode="cover"
      source={{ uri: imageUri }}
      style={{ width: size, height: size, borderRadius: size }}
    />
  );
};

export default ImageProfileNormal;
