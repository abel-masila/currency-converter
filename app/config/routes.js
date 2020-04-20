import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./../screens/Home";
import CurrencyList from "./../screens/CurrencyList";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="screen" mode="modal">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={({ route }) => ({ headerTitle: route.params.title })}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
