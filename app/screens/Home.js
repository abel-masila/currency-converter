import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import { Container } from "./../components/Container";
import { Logo } from "./../components/Logo";
import { InputWithButton } from "./../components/TextInput";
import { ClearButton } from "../components/Buttons";
import { LastConverted } from "./../components/Text";
import { Header } from "../components/Header";

const BASE_CURRENCY = "USD";
const QUOTE_CURRENCY = "GBP";
const BASE_PRICE = "100";
const QUOTE_PRICE = "79.74";
const CONVERSION_RATE = 0.7974;
const CONVERSION_DATE = new Date();
class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log("press base");
  };
  handlePressQuoteCurrency = () => {
    console.log("press quote");
  };
  handleTextChange = (text) => {
    console.log("change text", text);
  };
  handleSwapCurrencies = () => {
    console.log("press swap");
  };
  handleOptionsPress = () => {
    console.log("press options");
  };
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
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
          <LastConverted
            base={BASE_CURRENCY}
            quote={QUOTE_CURRENCY}
            data={CONVERSION_DATE}
            conversionRate={CONVERSION_RATE}
          />
          <ClearButton
            text="Reverse currencies"
            onPress={this.handleSwapCurrencies}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
