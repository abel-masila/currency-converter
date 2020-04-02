import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import styles from "./styles";

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require("./images/background.png")}
      style={styles.containerImage}
      resizeMode="contain"
    >
      <Image
        source={require("./images/logo.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </ImageBackground>
    <Text style={styles.text}> Currency Converter</Text>
  </View>
);

export default Logo;
