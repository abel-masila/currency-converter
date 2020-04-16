import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const imageWidth = Dimensions.get("window").width / 2;
export default EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,
  container: {
    alignItems: "center",
  },
  containerImage: {
    alignItems: "center",
    justifyContent: "center",
    width: "$largeContainerSize",
    height: "$largeContainerSize",
  },
  image: {
    width: "$largeImageSize",
  },
  text: {
    fontWeight: "600",
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: "$white",
  },
});
