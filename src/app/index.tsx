import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />
      <Image
        source={require("../../assets/images/login.png")}
        style={styles.loginImage}
      />
      <Text style={styles.title}>Quick and Quality</Text>
      <Text style={styles.description}>
        We are professionlism in the cleaning industry by providing services
      </Text>

      <Link asChild href="/login">
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 90,
    height: 60,
  },
  loginImage: {
    width: 320,
    height: 300,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    lineHeight: 30,
    fontWeight: "400",
    color: "#333",
  },
  button: {
    backgroundColor: "#f5c500",
    width: 300,
    height: 50,
    borderRadius: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
});
