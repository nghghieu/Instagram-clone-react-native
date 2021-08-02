import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import stories from "../../data/stories";
import styles from "./styles";

const DiscoveryScreen = () => {
  const navigation = useNavigation();

  const DiscoveryImage = ({ item }) => {
    const PressHandle = () => {
      navigation.navigate("DiscoveryDetailScreen", { user: item });
    };
    return (
      <View style={styles.imageItem}>
        {item.stories.map((image, idx) => {
          return (
            <TouchableOpacity
              style={styles.touchable}
              key={idx}
              onPress={PressHandle}
            >
              <Image
                source={{
                  uri: image.imageUri,
                }}
                style={styles.image}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar placeholder="Search" style={styles.searchBar} />
      <FlatList
        data={stories}
        renderItem={({ item }) => (
          <DiscoveryImage key={item.user.id} item={item} />
        )}
        keyExtractor={(item) => item.user.id}
        style={styles.flatListRenderImage}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

export default DiscoveryScreen;
