import React from "react";
import { Text, FlatList, View, StatusBar } from "react-native";
import { connect } from "react-redux";

import { ListItem, Separator } from "./../components/List";
import currencies from "./../data/currencies";
import {
  changeBaseCurrency,
  changeQuoteCurrency,
} from "./../actions/currencies";

const CURRENT_CURRENCY = "CAD";
class CurrencyList extends React.Component {
  handlePress = (currency) => {
    const { type } = this.props.route.params;
    if (type === "base") {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === "quote") {
      this.props.dispatch(changeQuoteCurrency(currency));
    }

    this.props.navigation.goBack(null);
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
              onPress={() => this.handlePress(item)}
            />
          )}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={Separator}
        ></FlatList>
      </View>
    );
  }
}

export default connect()(CurrencyList);
