import React ,{ useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
 
} from "react-native";
import axios from 'axios';
import LoginScreen from "./LoginScreen";


export default function ForgotPassword({ navigation }) {

  const [email,setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/forgot-password/forgot_password', {
        email
      });
      Alert.alert('Success', response.data.message);
    } catch (error) {
      Alert.alert('Error', error.response.data.message || 'Something went wrong.');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Forgot Password</Text>
      <Text>No Worries we will send you instructions to reset</Text>
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={styles.RestButton}
        onPress={handleForgotPassword}
      >
        <Text style={styles.RestButtonText}>Reset Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
       onPress={()=>navigation.navigate(LoginScreen)}>
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
  input: {
    width: "95%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  RestButton: {
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
