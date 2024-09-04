import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Color from '../assets/Color'

export default function CategorySelectionScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelection = (category) => {
    setSelectedCategory(category);
  };

  const handleSubmit = () => {
    if (selectedCategory === "Teacher" || selectedCategory === "Student") {
      navigation.navigate("CreateProfileScreen");
    } else {
      alert("Please select a category!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join as a Teacher or Student</Text>

      <TouchableOpacity
        style={[
          styles.button,
          selectedCategory === "Teacher" ? styles.selected : null,
        ]}
        onPress={() => handleSelection("Teacher")}
      >
       
        <Image source={require("../assets/Teacher.png")} style={styles.icon} />
        <Text style={styles.buttonText}>Join as a Teacher</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          selectedCategory === "Student" ? styles.selected : null,
        ]}
        onPress={() => handleSelection("Student")}
      >
        <Image source={require("../assets/Student.png")} style={styles.icon} />
        <Text style={styles.buttonText}>Join as a Student</Text>
      </TouchableOpacity>

      {/* Empty space that grows to push the continue button to the bottom */}
      <View style={{ flex: 1 }} />

      <TouchableOpacity style={styles.createButton} onPress={handleSubmit}>
        <Text style={styles.createButtonText}>Create Your Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Align content at the top initially

    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    paddingLeft: 15,
    marginTop: 20,
    marginBottom: 40,
    fontWeight: "bold",
    color:Color.blue,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    padding: 10,
    margin: 10,
    borderColor:Color.gold,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: Color.blue,
  },
  selected: {
    backgroundColor: "#eedd82",
  },
  createButton: {
    backgroundColor: "#3498db",
    padding: 15,
    width: 300,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
  },
  createButtonText: {
    fontSize: 18,
    color: "#fff",
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
