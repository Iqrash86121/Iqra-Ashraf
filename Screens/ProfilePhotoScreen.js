import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Color from '../assets/Color'

export default function ProfilePhotoScreen({ navigation }) {
  const [photo, setPhoto] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Camera permissions are required to take a photo.');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleSelection = () => {
    console.log("Next Button Pressed.");
    navigation.navigate("Certification");
  };

  return (
    <View style={styles.container}>

      {/* Tabs */}
      <View style={styles.tabs}>
      <TouchableOpacity onPress={() => navigation.navigate("CreateProfileScreen")}>
        <Text style={styles.tab}>About Us</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        
        <TouchableOpacity onPress={() => navigation.navigate("ProfilePhotoScreen")}>
        <Text style={styles.tabActive}>Photo</Text>
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

      {/* Profile Photo Section */}
      <Text style={styles.sectionTitle}>Profile Photo</Text>
      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
      <Image
          source={require('../assets/Gal.png')}
          style={{height:40,width:40,marginRight:10}}
        />
        <Text style={styles.uploadButtonText}>Upload Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.uploadButton} onPress={takePhoto}>
      <Image
          source={require("../assets/Cam.jpg")}
          style={{height:40,width:40,marginRight:10}}
        />
        <Text style={styles.uploadButtonText}>Take Photo</Text>
      </TouchableOpacity>

      <Text style={styles.imageHint}>JPG or PNG format, Maximum 5 MB</Text>

      {/* Image Preview */}
      {photo && (
        <View style={styles.imagePreviewContainer}>
          <Image source={{ uri: photo }} style={styles.imagePreview} />
          <View style={styles.imagePlaceholder}>
            <View style={styles.imageLine} />
            <View style={styles.imageLine} />
          </View>
        </View>
      )}

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
          onPress={handleSelection}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  tab: {
    fontSize: 16,
    marginHorizontal: 5,
    color: "#0000EE",
  },
  tabActive: {
    fontSize: 16,
    marginHorizontal: 5,
    color: "#0000EE",
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
  uploadButton: {
    height: 50,
    borderColor: Color.gold,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#f5f5f5",
    flexDirection:'row'
  },
  uploadButtonText: {
    color: Color.blue,
  },
  imageHint: {
    color: "#888",
    marginBottom: 20,
    textAlign: "center",
  },
  imagePreviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  imagePlaceholder: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    height: 100,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  imageLine: {
    height: 10,
    backgroundColor: "#c0c0c0",
    borderRadius: 5,
    marginVertical: 5,
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  previousButton: {
    backgroundColor: "#f5f5f5",
    marginRight: 10,
    borderWidth: 0.5,
  },
  nextButton: {
    backgroundColor: "#007BFF",
    marginLeft: 10,
  },
  previousButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});