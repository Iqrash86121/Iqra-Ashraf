import React, {  useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
 
  TouchableOpacity,
} from "react-native";
import Color from '../assets/Color'  


export default function HomeScreen({ navigation }) {
  


  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Image
          source={require("../assets/Logo.png")}
          style={[
            styles.logo,
      
          ]}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.appName,
         
        ]}
      >
        City College Warburton
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 0,
  },
  appName: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    color:Color.blue,
  },
});
