import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const ContactScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>Contact</Text>
        <Button
          onPress={() => {
            navigation.navigate("About");
          }}
          title="Go To About"
        />
  
        <Button
          onPress={() => {
            navigation.toggleDrawer();
          }}
          title="Toggle Menu"
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  export default ContactScreen