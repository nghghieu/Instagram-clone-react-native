import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = ({ primary, title = "Follow" }) => {
  return (
    <>
      {primary ? (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonWhite}>
          <Text style={styles.textButtonWhite}>{title}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Button;
