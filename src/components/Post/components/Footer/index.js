import { AntDesign, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Footer = ({ likesCount: likesCountProps, caption, postedAt }) => {
  const [isLiked, setIsLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);
    setIsLike(!isLiked);
  };

  useEffect(() => {
    setLikesCount(likesCountProps);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableOpacity
            onPress={onLikePressed}
            hitSlop={{ top: 10, bottom: 10, left: 0, right: 0 }}
          >
            {isLiked ? (
              <AntDesign name="heart" size={25} color="red" />
            ) : (
              <AntDesign name="hearto" size={25} color="#545454" />
            )}
          </TouchableOpacity>
          <Fontisto name="comment" size={23} color="#545454" />
          <Ionicons name="paper-plane-outline" size={25} color="#545454" />
        </View>

        <FontAwesome name="bookmark-o" size={24} color="black" />
      </View>

      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
