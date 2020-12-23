import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Drawer from './navigation/DrawerNavigator';

export default function App() {
  return (
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
  );
}
