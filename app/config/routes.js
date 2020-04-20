import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./../screens/Home";
import CurrencyList from "./../screens/CurrencyList";
import Options from "./../screens/Options";
import Themes from "./../screens/Themes";

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      mode="modal"
      headerMode="screen"
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Options"
        component={Options}
        options={{
          headerTitle: "Options",
        }}
      />
      <Stack.Screen
        name="Themes"
        component={Themes}
        options={{
          headerTitle: "Themes",
        }}
      />
    </Stack.Navigator>
  );
}

function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="screen" mode="modal">
      <Stack.Screen
        name="Home"
        component={HomeNavigator}
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

export default MainNavigator;
