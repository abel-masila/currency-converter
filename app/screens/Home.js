import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { Container } from "./../components/Container";
import { Logo } from "./../components/Logo";
import { InputWithButton } from "./../components/TextInput";

const BASE_CURRENCY = "USD";
const QUOTE_CURRENCY = "GBP";
const BASE_PRICE = "100";
const QUOTE_PRICE = "79.74";
class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log("press base");
  };
  handlePressQuoteCurrency = () => {
    console.log("press quote");
  };
  handleTextChange = text => {
    console.log("change text", text);
  };
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          btnText={BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          btnText={QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          editable={false}
          value={QUOTE_PRICE}
        />
      </Container>
    );
  }
}

export default Home;
