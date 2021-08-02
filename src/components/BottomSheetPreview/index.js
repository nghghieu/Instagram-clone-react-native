import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";
import BottomSheet from "reanimated-bottom-sheet";
import styles from "./styles";

const BottomSheetPreview = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState();
  const [opacity, setOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => onOpen()}>
          <Entypo
            name="dots-three-vertical"
            size={20}
            style={{ marginRight: 15 }}
          />
        </Pressable>
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

  const renderInner = () => (
    <View style={styles.innerContainer}>
      {/* Line Gesture */}
      <View style={styles.lineGestureContainer}>
        <View style={styles.lineGesture} />
      </View>

      {/* Option Choose */}
      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <Text>Report...</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <Text>Block</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <Text>Restrict</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <Text>Hide Your Story</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <Text>Copy Profile URL</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.optionItem}>
        <Text>Share this Profile</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <>
      {isOpen && renderBackDrop()}
      <BottomSheet
        ref={bs}
        snapPoints={[0, 350]}
        initialSnap={0}
        renderContent={renderInner}
        onCloseEnd={onClose}
      />
    </>
  );
};

export default BottomSheetPreview;
