import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function IDCardVerificationScreen({navigation}) {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const pickImage = async (setImage) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileDescriptionScreen")}>
        <Text style={styles.tab}>Details</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AvailabilityForm")}>
        <Text style={styles.tab}>Availability</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("IDCardVerificationScreen")}>
        <Text style={styles.tabActive}>ID Card Verification</Text>
        </TouchableOpacity>
        
      </View>
    
      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Text>

      <View style={styles.uploadContainer}>
        <Text style={styles.uploadText}>Upload Front Side</Text>
        <TouchableOpacity
          style={styles.uploadBox}
          onPress={() => pickImage(setFrontImage)}
        >
          {frontImage ? (
            <Image source={{ uri: frontImage }} style={styles.image} />
          ) : (
            <Text style={styles.placeholderText}>Upload your file here</Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.uploadContainer}>
        <Text style={styles.uploadText}>Upload Back Side</Text>
        <TouchableOpacity
          style={styles.uploadBox}
          onPress={() => pickImage(setBackImage)}
        >
          {backImage ? (
            <Image source={{ uri: backImage }} style={styles.image} />
          ) : (
            <Text style={styles.placeholderText}>Upload your file here</Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Previous" onPress={() => navigation.navigate('AvailabilityForm')} />
        <Button title="Save" onPress={() => navigation.navigate('SuccessfulProfileCreation')} color="#0065FF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  uploadContainer: {
    marginBottom: 20,
  },
  uploadText: {
    fontSize: 16,
    marginBottom: 10,
  },
  uploadBox: {
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#aaa',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  tabActive: {
    fontSize: 16,
    marginHorizontal: 5,
    color: "#0000EE", // Active tab
    fontWeight: "bold",
  },
  tab: {
    fontSize: 16,
    marginHorizontal: 5,
    color: "#0000EE", // Blue color for the tabs
  },
});
