import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import Icon from "./Icon";
import styles from "./styles";
const ListItem = ({
  text,
  onPress,
  selected = false,
  checkMark = true,
  visible = true,
  customIcon = null,
  iconBackground,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? (
        <Icon
          checkMark={checkMark}
          visible={visible}
          iconBackground={iconBackground}
        />
      ) : (
        <Icon />
      )}
      {customIcon}
    </View>
  </TouchableHighlight>
);

export default ListItem;
