import React from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import color from "color";

import styles from "./styles";
const InputWithButton = (props) => {
  const { onPress, btnText, editable = true, textColor } = props;
  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier
  );
  const buttonTextStyles = [styles.btnText];
  if (textColor) {
    buttonTextStyles.push({ color: textColor });
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        onPress={onPress}
        style={styles.btnContainer}
        underlayColor={underlayColor}
      >
        <Text style={buttonTextStyles}>{btnText}</Text>
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
