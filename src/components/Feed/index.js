import React from "react";
import { FlatList } from "react-native";
import feedDatas from "../../data/feedDatas";
import Post from "../Post";
import Stories from "../UserStoriesPreview";

const Feed = () => {
  return (
    <FlatList
      data={feedDatas}
      renderItem={({ item, idx }) => <Post key={idx} post={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
