import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={require("./images/gear.png")}
        style={styles.icon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  </View>
);

export default Header;
