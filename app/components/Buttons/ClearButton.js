import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image
        source={require("./images/icon.png")}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default ClearButton;
