import React from "react";
import { View } from "react-native";
import Post from "../../components/Post";
import styles from "./styles";

const ActiveScreenProfileToPost = ({ route }) => {
  const { item, data } = route.params;

  const _data = {
    id: data.user.id,
    user: {
      imageUri: data.user.imageUri,
      name: data.user.name,
    },
    imageUri: item.imageUri,
    caption: item.caption,
    likesCount: item.likesCount,
    postedAt: item.postedAt,
  };

  return (
    <View style={styles.container}>
      <Post post={_data} />
    </View>
  );
};

export default ActiveScreenProfileToPost;
