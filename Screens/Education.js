import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import Color from "../assets/Color"
const Education = ({ navigation }) => {
  const [university, setUniversity] = useState('');
  const [degree, setDegree] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
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
    <ScrollView contentContainerStyle={styles.container}>
       <View style={styles.tabs}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfilePhotoScreen")}>
        <Text style={styles.tab}>Photo</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Certification")}>
        <Text style={styles.tab}>Certification</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Education")}>
        <Text style={styles.tabActive}>Education</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SkillScreen")}>
        <Text style={styles.tab}>Skills</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Education</Text>
      <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

      <TextInput
        style={styles.input}
        placeholder="E.g. Mount Royal University"
        value={university}
        onChangeText={setUniversity}
      />
      <TextInput
        style={styles.input}
        placeholder="E.g. Bachelor's in English language"
        value={degree}
        onChangeText={setDegree}
      />
      <TextInput
        style={styles.input}
        placeholder="E.g. Teaching English as a Foreign language"
        value={specialization}
        onChangeText={setSpecialization}
      />
      <View style={styles.dateContainer}>
        <TextInput
          style={[styles.input, styles.dateInput]}
          placeholder="E.g. 16-10-2020"
          value={startDate}
          onChangeText={setStartDate}
        />
        <TextInput
          style={[styles.input, styles.dateInput]}
          placeholder="E.g. 16-10-2022"
          value={endDate}
          onChangeText={setEndDate}
        />
      </View>

      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Text style={styles.uploadButtonText}>Upload Degree</Text>
      </TouchableOpacity>

      {/* Image Preview */}
      {certificateImage && (
        <Image source={{ uri: certificateImage }} style={styles.imagePreview} />
      )}
      <Text style={styles.infoText}>JPG or PNG format, Maximum 5 MB</Text>

      <TouchableOpacity>
        <Text style={styles.addMoreText}>Add another Education</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <Button title="Previous" onPress={() => navigation.goBack()} />
        <Button title="Next" onPress={() => navigation.navigate('SkillScreen')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    flexGrow: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color:Color.blue
  },
  description: {
    fontSize: 14,
    color:Color.blue,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: Color.gold,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
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
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInput: {
    width: '48%',
    borderColor:Color.gold,
    borderWidth:1
  },
  uploadButton: {
    backgroundColor: '#eaeaea',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    borderColor:Color.gold
  },
  uploadButtonText: {
    color: Color.blue,
  },
  infoText: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  addMoreText: {
    color: '#007bff',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagePreview: {
    width: "100%",
    height: 150,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default Education;
