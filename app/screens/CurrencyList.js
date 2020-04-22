import React from "react";
import { Text, FlatList, View, StatusBar } from "react-native";
import { connect } from "react-redux";

import { ListItem, Separator } from "./../components/List";
import currencies from "./../data/currencies";
import {
  changeBaseCurrency,
  changeQuoteCurrency,
} from "./../actions/currencies";

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
    const { baseCurrency, quoteCurrency } = this.props;
    const { type } = this.props.route.params;
    let comparisonCurrency = baseCurrency;
    if (type === "quote") {
      comparisonCurrency = quoteCurrency;
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
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

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  return {
    baseCurrency,
    quoteCurrency,
  };
};
export default connect(mapStateToProps, null)(CurrencyList);
