import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

interface Errors {
  email?: string[];
}

const ForgotScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 28, fontWeight: 500 }}>Forgot Password?</Text>
        <Text style={{ fontSize: 16, color: "darkgray" }}>
          Don't worry! It occurs. Please enter the mail address linked with your
          account
        </Text>
      </View>
      <View style={styles.inputContainer}>
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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send Reset Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 50,
    gap: 20,
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
    gap: 10,
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
    width: 340,
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },
});
