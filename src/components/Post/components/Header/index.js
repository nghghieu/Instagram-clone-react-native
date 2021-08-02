import React from "react";
import { View, Text } from "react-native";
import ProfilePicture from "../../../ProfilePicture";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";

const Header = ({ imageUri, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture imageUri={imageUri} size={40} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.right}>
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>
    </View>
  );
};

export default Header;
