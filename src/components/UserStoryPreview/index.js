import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ProfilePicture from "../ProfilePicture";
import styles from "./styles";

const Story = (props) => {
  const {
    story: {
      user: { id, imageUri, name },
    },
  } = props;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Story", { userID: id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture imageUri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;
