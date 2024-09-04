import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";

export default function SuccessfulProfileCreation({navigation}) {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/Created.json")}
        autoPlay
        loop={false}
        style={styles.lottie}
      />
      <Text style={styles.heading}>
        Your Profile Has Been Created{"\n"}Successfully!
      </Text>
      <Text style={styles.text}>
        Lorem ipsum is a dummy text used by text and printing industry
      </Text>
      <TouchableOpacity style={styles.Button}
      onPress={() => navigation.navigate("MainScreen")}>
        <Text style={styles.ButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", // Centers all content horizontally
  },
  Button: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  lottie: {
    width: 200,
    height: 200,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center", // Centers text within the Text component
  },
  text: {
    marginTop: 20,
    padding: 30,
    textAlign: "center", // Centers the paragraph text
  },
});