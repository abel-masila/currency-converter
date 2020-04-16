import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";
const Icon = ({ checkMark, visible }) => {
  const iconStyle = [styles.icon];
  if (visible) {
    iconStyle.push(styles.iconVisible);
  }
  return (
    <View style={iconStyle}>
      {checkMark ? (
        <Image
          source={require("./images/check.png")}
          style={styles.checkIcon}
          resizeMode="contain"
        />
      ) : null}
    </View>
  );
};

export default Icon;
