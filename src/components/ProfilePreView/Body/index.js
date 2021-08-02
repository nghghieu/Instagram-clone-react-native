import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import IconEvilIcons from "react-native-vector-icons/EvilIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import EmtyArrayPreview from "../EmtyArrayPreview";
import GridRender from "../GridRender";
import styles from "./styles";

const { width, height } = Dimensions.get("window");

const ProfilePreviewBody = ({ data }) => {
  const [activeGrid, setActiveGrid] = useState(true);
  const [activeUser, setActiveUser] = useState(false);
  const [offsetX, setoffsetX] = useState(0);

  const scrollViewItem = useRef();

  const handleScroll = (e) => {
    const x = e.nativeEvent.contentOffset.x;
    if (x < width / 2) {
      setActiveGrid(true);
      setActiveUser(false);
    } else {
      setActiveGrid(false);
      setActiveUser(true);
    }
    setoffsetX(x);
  };
  const handleGridClick = () => {
    scrollViewItem.current.scrollTo({ x: 0, y: height, animated: true });

    setoffsetX(0);
  };
  const handleUserClick = () => {
    scrollViewItem.current.scrollTo({ x: width, y: height, animated: true });
    setoffsetX(width);
  };

  return (
    <View style={styles.container}>
      {/* Option Container */}
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.optionItem} onPress={handleGridClick}>
          {activeGrid ? (
            <Icon name="grid" size={20} color="black" />
          ) : (
            <Icon name="grid" size={20} color="#ccc" />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem} onPress={handleUserClick}>
          {activeUser ? (
            <IconEvilIcons name="user" size={30} color="black" />
          ) : (
            <IconEvilIcons name="user" size={30} color="#ccc" />
          )}
        </TouchableOpacity>
      </View>

      <View
        style={[styles.line, { transform: [{ translateX: offsetX / 2 }] }]}
      />

      {/* Body */}
      <ScrollView
        style={styles.bodyContainer}
        horizontal
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={width}
        onScroll={handleScroll}
        ref={scrollViewItem}
        showsHorizontalScrollIndicator={false}
      >
        {/* Grid Post Item */}
        <View style={styles.gridContainer}>
          {data.stories.length === 0 ? (
            <EmtyArrayPreview iconName="image-outline" />
          ) : (
            <FlatList
              data={data.stories}
              renderItem={({ item, idx }) => (
                <GridRender key={idx} item={item} data={data} />
              )}
              keyExtractor={(item) => item.id}
              numColumns={3}
            />
          )}
        </View>

        {/* User Post Item */}
        <View style={styles.gridContainer}>
          {data.post.length === 0 ? (
            <EmtyArrayPreview />
          ) : (
            <FlatList
              data={data.stories}
              renderItem={({ item, idx }) => (
                <GridRender key={idx} item={item} data={data} />
              )}
              keyExtractor={(item) => item.id}
              numColumns={3}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfilePreviewBody;
