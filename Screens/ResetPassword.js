import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import axios from "axios"; // Ensure axios is imported

export default function ResetPassword({ route, navigation }) {
  const { token } = route.params; // Assuming the reset token is passed as a param
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`http://192.168.0.211:3000/api/forgot-password/reset-password/${token}`, {
        newPassword,
      });
      Alert.alert('Success', response.data.message);
      navigation.navigate("SuccessfullyUpdated"); // Navigate after Reset
    } catch (error) {
      Alert.alert('Error', error.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reset Password!</Text>
      <Image source={require("../assets/Logo.png")} style={styles.logo} />
      
      <Text style={styles.label}>New Password</Text>
      <TextInput
        style={styles.input}
        placeholder="New password"
        secureTextEntry={true}
        value={newPassword}
        onChangeText={setNewPassword}
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.ResetButton} onPress={handleResetPassword}>
        <Text style={styles.ResetButtonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  label: {
    width: "95%",
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    width: "95%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  ResetButton: {
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
  ResetButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
