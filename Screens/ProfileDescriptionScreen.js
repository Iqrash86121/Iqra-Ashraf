import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileDescriptionScreen({ navigation }) {
  return (
    
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.tabs}>
        
        <TouchableOpacity onPress={() => navigation.navigate("Education")}>
        <Text style={styles.tab}>Education</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Skills")}>
        <Text style={styles.tab}>Skills</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileDescriptionScreen")}>
        <Text style={styles.tabActive}>Details</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AvailabilityForm")}>
        <Text style={styles.tab}>Availability</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subText}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Text>

      <Text style={styles.labelText}>1. Introduction Yourself</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g. Hello, my name is... and I’m from..."
        multiline
      />

      <Text style={styles.labelText}>2. Teaching Experience</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g. Hello, my name is... and I’m from..."
        multiline
      />

      <Text style={styles.labelText}>3. Motivate Potential Students</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g. Hello, my name is... and I’m from..."
        multiline
      />

      <Text style={styles.labelText}>4. Write a Catchy Headline</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g. Hello, my name is... and I’m from..."
        multiline
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.prevButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText1}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('AvailabilityForm')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    fontSize: 14,
    height: 80,
    textAlignVertical: 'top',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  prevButton: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButton: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 15,
    backgroundColor: '#0066cc',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonText1: {
    color: 'black',
    fontSize: 16,
  },
});
