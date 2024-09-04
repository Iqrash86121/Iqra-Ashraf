import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert
} from "react-native";
import Color from '../assets/Color';
import axios from 'axios';
import { Feather, MaterialIcons } from "@expo/vector-icons";

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [nameVerify, setVerifyName] = useState(false);
  const [email, setEmail] = useState('');
  const [emailVerify, setVerifyEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setVerifyPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleSignup = async () => {
    try {
        const response = await axios.post('http://192.168.0.211:3000/api/auth/register', {
            name,
            email,
            password
        });

        if (response.status === 201) {
            Alert.alert('Success', 'User registered successfully');
            navigation.navigate('LoginScreen'); // Navigate to the login page
        }
    } catch (error) {
        if (error.response) {
            Alert.alert('Error', error.response.data.msg);
        } else {
            Alert.alert('Error', 'An error occurred during registration');
        }
    }
};
  function handleName(text) {
    setName(text);
    setVerifyName(false);
    setVerifyName(text.length > 1);
  }

  function handleEmail(text) {
    setEmail(text);
    setVerifyEmail(false);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setVerifyEmail(emailPattern.test(text));
  }
  function validatePassword(password) {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return { isValid: false, message: `Password must be at least ${minLength} characters long.` };
    }
    if (!hasUppercase) {
      return { isValid: false, message: 'Password must contain at least one uppercase letter.' };
    }
    if (!hasLowercase) {
      return { isValid: false, message: 'Password must contain at least one lowercase letter.' };
    }
    if (!hasNumber) {
      return { isValid: false, message: 'Password must contain at least one number.' };
    }
    if (!hasSpecialChar) {
      return { isValid: false, message: 'Password must contain at least one special character.' };
    }

    return { isValid: true, message: 'Password is valid.' };
  }
  function handlePassword(text) {
    setPassword(text);
    const validation = validatePassword(text);
    setVerifyPassword(validation.isValid);
  }


  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always">

      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require("../assets/Logo.png")} style={styles.logo} />
          <Text style={styles.heading}>Sign Up Now!</Text>
        </View>

        <Text style={styles.label}>User Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            onChangeText={handleName}
            value={name}
          />
          {name.length > 0 && (
            nameVerify ? (
              <Feather name="check-circle" size={20} color="green" />
            ) : (
              <MaterialIcons name="error" size={20} color="red" />
            )
          )}
        </View>
        {name.length === 1 && (
          <Text style={{ marginLeft: 20, color: 'grey' }}>
            Name should be more than one character!
          </Text>
        )}

        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            onChangeText={handleEmail}
            value={email}
          />
          {email.length > 0 && (
            emailVerify ? (
              <Feather name="check-circle" size={20} color="green" />
            ) : (
              <MaterialIcons name="error" size={20} color="red" />
            )
          )}
        </View>
        {!emailVerify && email.length > 0 && (
          <View>
            <Text style={{ marginLeft: 20, color: 'grey' }}>
              Enter a valid email address.
            </Text>
            <Text style={{ marginLeft: 20, color: 'grey' }}>
              That is "abc@example.com"
            </Text>
          </View>

        )}

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={showPassword}
            value={password}
            onChangeText={handlePassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {password.length<1? null:showPassword ? (
               <Feather name="eye-off" size={20} color="grey" />
            ): <Feather name="eye" size={20} color="black" />}
           
          </TouchableOpacity>
        </View>
        {!passwordVerify && password.length > 0 && (
          <Text style={{ marginLeft: 20, color: 'red' }}>
            {validatePassword(password).message}
          </Text>
        )}
        <TouchableOpacity
          style={styles.createButton}
          onPress={handleSignup}
        >
          <Text style={styles.createButtonText}>Create An Account</Text>
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

        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.link}>Already Registered? Log In</Text>
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
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 0,
    marginTop: 15,
    color: Color.blue,
  },
  inputContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.gold,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    marginRight: 10,
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: 20,
    fontSize: 16,
    marginBottom: 5,
    color: Color.blue,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderWidth: 0.5,
    borderColor: "#000",
    borderRadius: 10,
    width: "90%",
    marginBottom: 10,
  },
  buttonText: {
    color: Color.blue,
    textAlign: "center",
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  createButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    padding: 15,
    borderWidth: 0.5,
    borderColor: "#000",
    borderRadius: 20,
    width: "95%",
    marginBottom: 10,
    marginTop: 10,
  },
  createButtonText: {
    color: "#fff",
    textAlign: "center",
    flex: 1,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  orText: {
    fontSize: 20,
    fontWeight: "300",
    paddingBottom: 10,
  },
});
