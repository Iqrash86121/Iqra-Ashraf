import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Color from '../assets/Color'

export default function CreateProfileScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [experience, setExperience] = useState("");

  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [languageSpoken, setLanguageSpoken] = useState("");
  const [subjectTaught, setSubjectTaught] = useState("");
  const [additionalLanguages, setAdditionalLanguages] = useState([]);
  const [additionalSubjects, setAdditionalSubjects] = useState([]);

  const addLanguage = () => {
    setAdditionalLanguages([...additionalLanguages, ""]);
  };

  const addSubject = () => {
    setAdditionalSubjects([...additionalSubjects, ""]);
  };

  const handleLanguageChange = (text, index) => {
    const updatedLanguages = [...additionalLanguages];
    updatedLanguages[index] = text;
    setAdditionalLanguages(updatedLanguages);
  };

  const handleSubjectChange = (text, index) => {
    const updatedSubjects = [...additionalSubjects];
    updatedSubjects[index] = text;
    setAdditionalSubjects(updatedSubjects);
  };

  const handleSubmission = () => {
    // Handle form submission here
    console.log("Form Submitted");
    navigation.navigate("ProfilePhotoScreen");
  };

  return (
    <ScrollView style={styles.container}>

      {/* Tabs */}
      <View style={styles.tabs}>
      <TouchableOpacity onPress={() => navigation.navigate("CreateProfileScreen")}>
      <Text style={styles.tabActive}>About Us</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProfilePhotoScreen")}>
        <Text style={styles.tab}>Photo</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Certification")}>
        <Text style={styles.tab}>Certification</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Education")}>
        <Text style={styles.tab}>Education</Text>
        </TouchableOpacity>
      </View>

      {/* About Us */}
      <Text style={styles.sectionTitle}>About Us</Text>
      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      {/* Form Fields */}
      <Text style={styles.inputLabel}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g. Steve Smith"
        value={fullName}
        onChangeText={setFullName}
      />

      <Text style={styles.inputLabel}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g. example12@gmail.com"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.inputLabel}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g. +92 3056789888"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <Text style={styles.inputLabel}>Experience</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g. 5 years"
        value={experience}
        onChangeText={setExperience}
      />

      {/* Additional Form Fields */}
      <Text style={styles.inputLabel}>Country</Text>
      <View style={styles.pickerContainer}>
      <Picker
        selectedValue={country}
        style={styles.picker}
        onValueChange={(itemValue) => setCountry(itemValue)}
      >
        
        <Picker.Item label="Select your country" value="" />
        <Picker.Item label="Pakistan" value="Pakistan" />
        <Picker.Item label="India" value="India" />
        <Picker.Item label="United States" value="United States" />
        <Picker.Item label="United Kingdom" value="United Kingdom" />
        <Picker.Item label="Canada" value="Canada" />
        <Picker.Item label="Australia" value="Australia" />
        <Picker.Item label="Germany" value="Germany" />
        <Picker.Item label="France" value="France" />
       
      </Picker>
      </View>

      <Text style={styles.inputLabel}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g. Model town lahore"
        value={location}
        onChangeText={setLocation}
      />

      <Text style={styles.inputLabel}>Language Spoken</Text>
     
      <View style={styles.pickerContainer}>
         <Picker
        selectedValue={languageSpoken}
        style={styles.picker}
        onValueChange={(itemValue) => setLanguageSpoken(itemValue)}
      >
         <Picker.Item label="Select a language" value="" />
        <Picker.Item label="English" value="English" />
        <Picker.Item label="Spanish" value="Spanish" />
        <Picker.Item label="French" value="French" />
        <Picker.Item label="Mandarin" value="Mandarin" />
        <Picker.Item label="Hindi" value="Hindi" />
        <Picker.Item label="Arabic" value="Arabic" />
        <Picker.Item label="German" value="German" />
      </Picker>
      </View>

      {additionalLanguages.map((language, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder="Add another language"
          value={language}
          onChangeText={(text) => handleLanguageChange(text, index)}
        />
      ))}

      <TouchableOpacity onPress={addLanguage}>
        <Text style={styles.addText}>Add another language</Text>
      </TouchableOpacity>

      <Text style={styles.inputLabel}>Subject Taught</Text>
     
      <View style={styles.pickerContainer}>
         <Picker
        selectedValue={subjectTaught}
        style={styles.picker}
        onValueChange={(itemValue) => setSubjectTaught(itemValue)}
      >
         <Picker.Item label="Select a subject" value="" />
        <Picker.Item label="Mathematics" value="Mathematics" />
        <Picker.Item label="Physics" value="Physics" />
        <Picker.Item label="Chemistry" value="Chemistry" />
        <Picker.Item label="Biology" value="Biology" />
        <Picker.Item label="History" value="History" />
        <Picker.Item label="Geography" value="Geography" />
        <Picker.Item label="Computer Science" value="Computer Science" />
      </Picker>
      </View>

      {additionalSubjects.map((subject, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder="Add another subject"
          value={subject}
          onChangeText={(text) => handleSubjectChange(text, index)}
        />
      ))}

      <TouchableOpacity onPress={addSubject}>
        <Text style={styles.addText}>Add another subject</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmission}>
        <Text style={styles.submitButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    fontSize: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color:Color.blue,
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  tab: {
    fontSize: 16,
    marginHorizontal: 5,
    color: "#0000EE", // Blue color for the tabs
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    color:Color.blue,
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
    color:Color.blue,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight:'bold',
    color:Color.blue,
  },
  input: {
    height: 40,
    borderColor:Color.gold,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#f5f5f5", // Light gray for input background
  },
  picker: {
    height: 50,
    width: '100%',
    color: Color.blue,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: Color.gold,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    marginBottom:5
  },
  addText: {
    color: "blue",
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#0000EE", // Blue color for the submit button
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30, // Add some margin at the bottom to ensure the button is visible
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,

    fontWeight: "bold",
  },
  tabActive: {
    fontSize: 16,
    marginHorizontal: 5,
    color: "#0000EE", // Active tab
    fontWeight: "bold",
  },
});
