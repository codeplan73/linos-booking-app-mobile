import React, { useEffect } from "react";
import { View, Image, StyleSheet, StatusBar } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Set the background color to match your design
  },
  logo: {
    width: 200, // Adjust the size as needed
    height: 200, // Adjust the size as needed
  },
});

export default SplashScreen;
