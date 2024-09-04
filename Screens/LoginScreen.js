import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import Color from '../assets/Color' 
import  axios  from "axios"; 
import { Feather } from "@expo/vector-icons";


export default function LoginScreen({ navigation }) {
  const [email,setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async (email, password) => {
    try {
        const response = await axios.post('http://192.168.0.211:3000/api/auth/login', {
            email: email,
            password: password,
        });

        if (response.status === 200) {
            // Handle successful login, e.g., navigate to another screen
            Alert.alert('Success', 'Login successful!');
            console.log(response.data); // Here, you can handle the user data as needed
            navigation.navigate("MainScreen");
        }
    } catch (error) {
        if (error.response) {
            // If the server responds with a status code out of the range of 2xx
            Alert.alert('Error', error.response.data.message);
        } else {
            // If there is no response from the server
            Alert.alert('Error', 'Unable to connect to the server');
        }
    }
};
const onLoginPress = () => {
  handleLogin(email, password);
};
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Log In</Text>
      <Image source={require("../assets/Logo.png")} style={styles.logo} />
      <Text style={styles.label}>User Name or Email</Text>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      </View>
  <Text style={styles.label}>Password</Text>
  <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {password.length<1? null:showPassword ? (
               <Feather name="eye-off" size={20} color="grey" />
            ): <Feather name="eye" size={20} color="black" />}
           
          </TouchableOpacity>
</View>

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPasswordText}>
            Forgot Password
            <Text style={styles.link}></Text>
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}
      onPress={onLoginPress}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or</Text>

      <TouchableOpacity style={styles.button}>
        <Image source={require("../assets/google.png")} style={styles.icon} />
        <Text style={styles.buttonText}>Sign Up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image source={require("../assets/facebook.png")} style={styles.icon} />
        <Text style={styles.buttonText}>Sign Up with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate("SignUpScreen")}>
        <Text style={styles.signUpText}>
          Don't have an account?
          <Text  style={styles.link}>
            Sign Up
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
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
    marginBottom: 5,
    marginTop:5,
    color:Color.blue,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom:10,
  },
  label: {
    width: "95%",
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
    color:Color.blue,
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 8,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 30,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Color.blue,
    fontSize: 16,
    textAlign: "center",
  },
  loginButton: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:30,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  orText: {
    fontSize: 15,
    fontWeight: "300",
    marginVertical: 2,
  },
  signUpText: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.gold,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal:10,
  },
  link: {
    paddingLeft: 5,
    color: "blue",
    textDecorationLine: "underline",
  },
  forgotPasswordContainer: {
    width: "100%", // Ensure the container spans full width
    alignItems: "flex-end", // Aligns children to the right
  },
  forgotPasswordText: {
    color: "blue",
    paddingHorizontal: 20,
    textDecorationLine: "underline",
  },
});
