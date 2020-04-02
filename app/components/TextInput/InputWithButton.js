import React from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import color from "color";

import styles from "./styles";
const InputWithButton = props => {
  const { onPress, btnText, editable = true } = props;
  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier
  );
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        onPress={onPress}
        style={styles.btnContainer}
        underlayColor={underlayColor}
      >
        <Text style={styles.btnText}>{btnText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        {...props}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default InputWithButton;
