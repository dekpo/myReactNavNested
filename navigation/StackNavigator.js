import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../screens/Home';
import AboutScreen from '../screens/About';
import ContactScreen from '../screens/Contact';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    )
}

const ContactStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Contact" component={ContactScreen} />
        </Stack.Navigator>
    )
}

export { MainStackNavigator, ContactStackNavigator }