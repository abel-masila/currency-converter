import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./config/routes";
import { AlertProvider } from "./components/Alert";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $white: "#FFF",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $lightGray: "#F0F0F0",
  $darkText: "#343434",

  $primaryOrange: "#D57A66",
  $primaryGreen: "#00BD9D",
  $primaryPurple: "#9E768F",
});

export default () => (
  <AlertProvider>
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  </AlertProvider>
);
