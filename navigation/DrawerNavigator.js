import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomTabNavigator from './TabNavigator';
import { ContactStackNavigator  } from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={BottomTabNavigator} />
            <Drawer.Screen name="Contact" component={ContactStackNavigator} />
          </Drawer.Navigator>
    );
}

export default DrawerNavigator