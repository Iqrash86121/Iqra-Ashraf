import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import LoginScreen from "./Screens/LoginScreen";
import ForgotPassword from "./Screens/ForgotPassword";
import Emailverify from "./Screens/Emailverify";
import ResetPassword from "./Screens/ResetPassword";
import  SuccessfullyUpdated from "./Screens/SuccessfullyUpdated";
import CategorySelectionScreen from "./Screens/CategorySelectionScreen";
import CreateProfileScreen from "./Screens/CreateProfileScreen";
import ProfilePhotoScreen from "./Screens/ProfilePhotoScreen";
import Certification from "./Screens/Certification";
import SkillScreen from "./Screens/SkillScreen";
import ProfileDescriptionScreen from "./Screens/ProfileDescriptionScreen";
import AvailabilityForm from "./Screens/AvailabilityForm"
import IDCardVerificationScreen from "./Screens/IDCardVerificationScreen"
import SuccessfulProfileCreation from "./Screens/SuccessfulProfileCreation"
import JobFilters from "./Screens/JobFilters"
import JobDetail from "./Screens/JobDetail"
import MainScreen from "./Screens/MainScreen";
import Education from "./Screens/Education";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fefefe", // Applies this background color to all headers
          },
          headerTintColor: "#000", // Color of the header text
          headerTitleStyle: {
            fontWeight: "bold", // Bold header titles
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
    
        <Stack.Screen
          name="CategorySelectionScreen"
          component={CategorySelectionScreen}
          options={{title:'Select Category'}}
        />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen}
        options={{title:'LogIn'}} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Emailverify" component={Emailverify} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="SuccessfullyUpdated" component={SuccessfullyUpdated} />
        <Stack.Screen
          name="CreateProfileScreen"
          component={CreateProfileScreen}
          options={{title:'Create Your Profile'}}
        />
        <Stack.Screen
          name="ProfilePhotoScreen"
          component={ProfilePhotoScreen}
          options={{title:'Create Your Profile'}}
        />
        <Stack.Screen name="Certification" component={Certification}
        options={{title:'Create Your Profile'}} />
         <Stack.Screen name="Education" component={Education}
        options={{title:'Create Your Profile'}} />
        <Stack.Screen name="SkillScreen"
         component={SkillScreen}
         options={{title:'Create Your Profile'}} />
        <Stack.Screen name="ProfileDescriptionScreen"
         component={ProfileDescriptionScreen}
         options={{title:'Create Your Profile'}} />
        <Stack.Screen name="AvailabilityForm"
         component={AvailabilityForm} 
         options={{title:'Create Your Profile'}}/>
        <Stack.Screen name="IDCardVerificationScreen"
         component={IDCardVerificationScreen}
         options={{title:'Create Your Profile'}}/>
        <Stack.Screen name="SuccessfulProfileCreation" component={SuccessfulProfileCreation} />
        <Stack.Screen name="MainScreen" component={MainScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="JobFilters" component={JobFilters} />
        <Stack.Screen name="JobDetail" component={JobDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "#fefefe",
  },
});
