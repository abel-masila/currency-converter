import React from "react";
import { Text, FlatList, View, StatusBar } from "react-native";

import { ListItem, Separator } from "./../components/List";
import currencies from "./../data/currencies";

const CURRENT_CURRENCY = "CAD";
class CurrencyList extends React.Component {
  handlePress = () => {
    console.log("row press");
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={Separator}
        ></FlatList>
      </View>
    );
  }
}

export default CurrencyList;
