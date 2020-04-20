import EStyleSheet from "react-native-extended-stylesheet";
//import { StatusBar } from "react-native";

export default EStyleSheet.create({
  container: {
    position: "absolute",
    right: 0,
    left: 0,
    top: 0,
    "@media ios": {
      paddingTop: 20,
    },
    // "@media android": {
    //   paddingTop: StatusBar.currentHeight,
    // },
  },
  button: {
    alignSelf: "flex-end",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  icon: {
    width: 18,
  },
});
