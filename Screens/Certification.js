import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Color from '../assets/Color'

export default function CertificationScreen({ navigation }) {
  const [subject, setSubject] = useState("");
  const [certificate, setCertificate] = useState("");
  const [description, setDescription] = useState("");
  const [institute, setInstitute] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [certificateImage, setCertificateImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setCertificateImage(result.assets[0].uri);
    }
  };

  return (
    
    <ScrollView style={styles.container}>
    

      {/* Tabs */}
      <View style={styles.tabs}>
      <TouchableOpacity onPress={() => navigation.navigate("CreateProfileScreen")}>
        <Text style={styles.tab}>About Us</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        
        <TouchableOpacity onPress={() => navigation.navigate("ProfilePhotoScreen")}>
        <Text style={styles.tab}>Photo</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Certification")}>
        <Text style={styles.tabActive}>Certification</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Education")}>
        <Text style={styles.tab}>Education</Text>
        </TouchableOpacity>
      </View>

      {/* Certification Section */}
      <Text style={styles.sectionTitle}>Certification</Text>
      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text style={styles.inputLabel}>Subject</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g. English"
        value={subject}
        onChangeText={setSubject}
      />

      <Text style={styles.inputLabel}>Certificate</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g. Teaching IELTS"
        value={certificate}
        onChangeText={setCertificate}
      />

      <Text style={styles.inputLabel}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g. Lorem Ipsum is simply dummy..."
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.inputLabel}>Institute</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g. Cambridge spoken school"
        value={institute}
        onChangeText={setInstitute}
      />

      <View style={styles.dateContainer}>
        <View style={styles.dateInputContainer}>
          <Text style={styles.inputLabel}>Start Date</Text>
          <TextInput
            style={styles.input}
            placeholder="E.g. 16-10-2020"
            value={startDate}
            onChangeText={setStartDate}
          />
        </View>
        <View style={styles.dateInputContainer}>
          <Text style={styles.inputLabel}>End Date</Text>
          <TextInput
            style={styles.input}
            placeholder="E.g. 16-10-2022"
            value={endDate}
            onChangeText={setEndDate}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
      <Image
          source={require('../assets/Gal.png')}
          style={{height:40,width:40,marginRight:10}}
        />
        <Text style={styles.uploadButtonText}>Upload Certificate</Text>
      </TouchableOpacity>
      <Text style={styles.imageHint}>JPG or PNG format, Maximum 5 MB</Text>

      {/* Image Preview */}
      {certificateImage && (
        <Image source={{ uri: certificateImage }} style={styles.imagePreview} />
      )}

      <TouchableOpacity
        style={styles.addCertificationButton}
        onPress={() => console.log("Add another Certification pressed")}
      >
        <Text style={styles.addCertificationText}>
          Add another Certification
        </Text>
      </TouchableOpacity>

      {/* Navigation Buttons */}
      <View style={styles.navigationButtons}>
        <TouchableOpacity
          style={[styles.button, styles.previousButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.previousButtonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.nextButton]}
          onPress={() => navigation.navigate("Education")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
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
  tabActive: {
    fontSize: 16,
    marginHorizontal: 5,
    color: "#0000EE", // Active tab
    fontWeight: "bold",
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
    borderColor: Color.gold,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    margin:5,
    backgroundColor: "#f5f5f5", // Light gray for input background
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateInputContainer: {
    flex: 1,
  },
  uploadButton: {
    height: 50,
    borderColor: Color.gold,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    flexDirection:'row',
    backgroundColor: "#f5f5f5", // Light gray background for upload button
  },
  uploadButtonText: {
    color:Color.blue,
  },
  imageHint: {
    color: "#888",
    marginBottom: 20,
    textAlign: "center",
  },
  imagePreview: {
    width: "100%",
    height: 150,
    borderRadius: 5,
    marginBottom: 20,
  },
  addCertificationButton: {
    marginBottom: 20,
  },
  addCertificationText: {
    color: "#0000EE",
    textAlign: "center",
    fontWeight: "bold",
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  background: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  button: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 30,
  },
  previousButton: {
    backgroundColor: "#f5f5f5",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  nextButton: {
    backgroundColor: "#007BFF",
    marginLeft: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  previousButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
});
