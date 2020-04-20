import React from "react";
import { ScrollView, StatusBar, Platform, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ListItem, Separator } from "./../components/List";
import { connectAlert } from "./../components/Alert";

const ICON_COLOR = "#868686";
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";
class Options extends React.Component {
  handleThemesPress = () => {
    this.props.navigation.navigate("Themes");
  };
  handleSitePress = () => {
    //handlebarlabs.com
    Linking.openURL("http://handlebarlabs.com").catch((e) => {
      console.log(e);
      this.props.alertWithType(
        "error",
        "Sorry",
        "Fixer.io cannot be opened now!"
      );
    });
  };
  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-link`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
