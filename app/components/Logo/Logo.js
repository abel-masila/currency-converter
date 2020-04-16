import React, { Component } from "react";
import {
  View,
  Text,
  Keyboard,
  Animated,
  Platform,
  StyleSheet,
} from "react-native";
import styles from "./styles";

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerImageWidth: new Animated.Value(styles.$largeContainerSize),
      imageWidth: new Animated.Value(styles.$largeImageSize),
    };
  }
  componentDidMount() {
    const name = Platform.OS === "ios" ? "Will" : "Did";
    this.KeyboardShowListener = Keyboard.addListener(
      `keyboard${name}Show`,
      this.keyboardShow
    );
    this.keyboardHideListener = Keyboard.addListener(
      `keyboard${name}Hide`,
      this.keyboardHide
    );
  }
  componentWillUnmount() {
    this.keyboardHideListener.remove();
    this.KeyboardShowListener.remove();
  }
  keyboardShow = () => {
    const { containerImageWidth, imageWidth } = this.state;

    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),

      Animated.timing(imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };
  keyboardHide = () => {
    const { containerImageWidth, imageWidth } = this.state;
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),

      Animated.timing(imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };
  render() {
    const { containerImageWidth, imageWidth } = this.state;
    const containerImageStyles = [
      styles.containerImage,
      { width: containerImageWidth, height: containerImageWidth },
    ];
    const imageStyles = [styles.logo, { width: imageWidth }];
    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyles}>
          <Animated.Image
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, containerImageStyles]}
            source={require("./images/background.png")}
          />
          <Animated.Image
            resizeMode="contain"
            style={imageStyles}
            source={require("./images/logo.png")}
          />
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
