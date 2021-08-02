import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import ReelsVideo from "../../components/ReelsVideo";
import reelDatas from "../../data/reelDatas";
import styles from "./styles";
import { useIsFocused } from "@react-navigation/native";

const { height } = Dimensions.get("window");

export default function ReelsScreen() {
  const [focus, setForcus] = React.useState(false);
  const [currentItem, setCurrentItem] = React.useState(0);

  isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      <SwiperFlatList
        data={reelDatas}
        vertical={true}
        renderItem={({ item, idx }) => (
          <ReelsVideo key={idx} item={item} currentItem={currentItem} />
        )}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={height - 85}
        keyExtractor={(item, idx) => idx.toString()}
        onScroll={(e) => {
          setCurrentItem(
            Math.floor(
              e.nativeEvent.contentOffset.y /
                e.nativeEvent.layoutMeasurement.height +
                0.1
            )
          );
        }}
      />

      <View style={[styles.positionView, { left: 15 }]}>
        <Text style={styles.textReels}>Reels</Text>
      </View>

      <View style={[styles.positionView, { right: 15 }]}>
        <Feather name="camera" color="white" size={30} />
      </View>
    </View>
  );
}
