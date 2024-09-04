import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Emailverify({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Forgot Password</Text>
      <Text>No Worries we will send you instructions to reset</Text>
      <Text style={styles.label}>Email Address</Text>

      <TouchableOpacity style={styles.ResetButton}
      onPress={() => navigation.navigate("ResetPassword")}>
        <Text style={styles.RestButtonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image style={styles.icon} />
        <Text style={styles.buttonText}>Back to Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "Center",
    alignItems: "Center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 10,
    marginTop: 10,
  },
  label: {
    width: "95%",
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
    marginTop: 20,
  },

  ResetButton: {
    flexDirection: "row",
    marginTop: 250,
    marginBottom: 5,
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
  },
  RestButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
