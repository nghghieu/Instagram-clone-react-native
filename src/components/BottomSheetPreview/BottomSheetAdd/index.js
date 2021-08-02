import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { useDispatch } from "react-redux";
import BottomSheet from "reanimated-bottom-sheet";
import { authActions } from "../../../../auth/auth.slice";
import styles from "./styles";

const BottomSheetAdd = ({ navigation, data }) => {
  const [isOpen, setIsOpen] = useState();
  const [addActive, setAddActive] = useState(false);
  const [barsActive, setBarsActive] = useState(false);

  const dispatch = useDispatch();

  const clearStorage = async () => {
    await AsyncStorage.removeItem("user");
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
    clearStorage();
  };

  const [opacity, setOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    navigation.setOptions({
      headerTitle: data.user.name,
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <Pressable
            onPress={() => {
              onOpen();
              setAddActive(true);
              setBarsActive(false);
            }}
          >
            <Octicons name="diff-added" size={25} style={styles.icon} />
          </Pressable>
          <Pressable
            onPress={() => {
              onOpen();
              setBarsActive(true);
              setAddActive(false);
            }}
          >
            <Octicons name="three-bars" size={25} style={styles.icon} />
          </Pressable>
        </View>
      ),
    });
  }, []);

  bs = useRef();
  window = Dimensions.get("window");

  const onClose = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start();
    bs.current.snapTo(0);
    setTimeout(() => {
      setIsOpen(false);
      setAddActive(false);
      setBarsActive(false);
    }, 50);
  };

  const onOpen = () => {
    setIsOpen(true);
    bs.current.snapTo(2);
    Animated.timing(opacity, {
      toValue: 0.7,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const renderBackDrop = () => (
    <Animated.View style={[styles.backDropContainer, { opacity: opacity }]}>
      <Pressable
        style={styles.backDropClickScreen}
        activeOpacity={1}
        onPress={onClose}
      />
    </Animated.View>
  );

  const renderInnerAdd = () => (
    <View style={[styles.innerContainer, { height: 500 }]}>
      {/* Line Gesture */}
      <View style={styles.lineGestureContainer}>
        <View style={styles.lineGesture} />
        <Text style={styles.lineGestureText}>Create New</Text>
      </View>
      {/* Option Choose */}
      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <MaterialCommunityIcons name="grid" size={25} style={styles.icon} />
        <Text>Feed Post</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <Ionicons name="film-outline" size={25} style={styles.icon} />
        <Text>Reel</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <Ionicons name="md-scan-circle-outline" size={25} style={styles.icon} />
        <Text>Story</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <Ionicons
          name="md-heart-circle-outline"
          size={25}
          style={styles.icon}
        />
        <Text>Story Hightlight</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <Feather name="video" size={25} style={styles.icon} />
        <Text>IGTV Video</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <MaterialCommunityIcons
          name="map-legend"
          size={25}
          style={styles.icon}
        />
        <Text>Guide</Text>
      </TouchableOpacity>
    </View>
  );

  const renderInnerBars = () => (
    <View style={[styles.innerContainer, { height: 500 }]}>
      {/* Line Gesture */}
      <View style={styles.lineGestureContainer}>
        <View style={styles.lineGesture} />
      </View>
      {/* Option Choose */}
      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <AntDesign name="setting" size={25} style={styles.icon} />
        <Text>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <Entypo name="back-in-time" size={25} style={styles.icon} />
        <Text>Archive</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <Ionicons name="timer-outline" size={25} style={styles.icon} />

        <Text>Your Activity</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <MaterialCommunityIcons
          name="qrcode-scan"
          size={25}
          style={styles.icon}
        />
        <Text>Qr Code</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <Ionicons name="bookmark-outline" size={25} style={styles.icon} />
        <Text>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <AntDesign name="bars" size={25} style={styles.icon} />
        <Text>Close Friend</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <Ionicons name="heart-circle-outline" size={25} style={styles.icon} />
        <Text>COVID-19 information Center</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <AntDesign name="message1" size={25} style={styles.icon} />
        <Text>Update Messaging</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onClose}
        style={styles.optionItem}
        onPress={handleLogout}
      >
        <AntDesign name="poweroff" size={25} style={styles.icon} />
        <Text>Log out </Text>
      </TouchableOpacity>
    </View>
  );
  const renderInner = () => {
    if (addActive) {
      return renderInnerAdd();
    }
    if (barsActive) {
      return renderInnerBars();
    }
  };

  return (
    <>
      {isOpen && renderBackDrop()}
      <BottomSheet
        ref={bs}
        snapPoints={[0, 500]}
        initialSnap={0}
        renderContent={renderInner}
        onCloseEnd={onClose}
      />
    </>
  );
};

export default BottomSheetAdd;
