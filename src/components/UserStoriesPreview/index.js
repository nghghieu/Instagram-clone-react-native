import React from "react";
import { FlatList } from "react-native";
import storiesData from "../../data/stories";
import Story from "../UserStoryPreview";
import styles from "./styles";

const Stories = () => {
  return (
    <FlatList
      data={storiesData}
      style={styles.container}
      keyExtractor={(item, idx) => idx.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, idx }) => <Story key={idx} story={item} />}
    />
  );
};

export default Stories;
