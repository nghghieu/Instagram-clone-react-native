import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image } from "react-native";
import styles from "./styles";

const ProfilePicture = ({ imageUri, size = 70 }) => {
  return (
    <LinearGradient
      colors={["#ff0000", "#db660d", "#db850d"]}
      style={[styles.container, { width: size + 6, height: size + 6 }]}
    >
      <Image
        source={{
          uri: imageUri,
        }}
        style={[styles.image, { width: size, height: size }]}
      />
    </LinearGradient>
  );
};

export default ProfilePicture;
