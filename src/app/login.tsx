import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import { Link } from "expo-router";
import React, { useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

const LoginScreen = () => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 90 : 0;
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("password");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    Alert.alert("Login", "Login Successful");
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <Spinner visible={loading} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.logo}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 34, fontWeight: 500 }}>Welcome Back!</Text>
            <Text style={{ fontSize: 20, fontWeight: 400 }}>
              Login to continue
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <View style={{ gap: 20 }}>
              <View>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                  style={styles.textInput}
                  keyboardType="email-address"
                  placeholder="Enter email address"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.textInput}
                  keyboardType="visible-password"
                  placeholder="Enter password"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
              <Link style={{ marginLeft: "auto" }} asChild href="/forgot">
                <TouchableOpacity>
                  <Text>Forgot Password?</Text>
                </TouchableOpacity>
              </Link>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 50,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  header: {
    alignItems: "center",
    paddingVertical: 50,
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#000",
    paddingTop: 70,
    paddingBottom: 70,
    borderBottomLeftRadius: 450,
  },
  logo: {
    width: 90,
    height: 60,
  },
  textContainer: {
    gap: 20,
    width: "100%",
    paddingHorizontal: 30,
  },
  inputContainer: {
    width: "100%",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 10,
  },
  label: {
    color: "#334155",
    fontSize: 16,
    fontWeight: "500",
  },
  textInput: {
    marginTop: 4,
    height: 50,
    width: 335,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontWeight: 500,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#f5c500",
    width: 360,
    height: 50,
    borderRadius: 10,
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
