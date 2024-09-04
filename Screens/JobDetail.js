import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function JobDetail() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.timeText}>2 Hour Ago</Text>
        <Text style={styles.title}>Native English Teacher</Text>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy Lorem Ipsum Lorem Ipsum is simply dummy Lorem Ipsum Lorem Ipsum...
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <Text style={styles.locationText}>Bank Square Market Model Town Lahore</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Job Type</Text>
        <View style={styles.jobTypeContainer}>
          <Text style={[styles.jobTypeText, styles.onsite]}>Onsite</Text>
          <Text style={[styles.jobTypeText, styles.remotely]}>Remotely</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General Skills</Text>
        <View style={styles.skillsContainer}>
          {['Communication', 'Time Management', 'Leadership', 'Creativity', 'Teamwork', 'Multitasking', 'Flexibility', 'Critical Thinking'].map((skill, index) => (
            <Text key={index} style={styles.skill}>{skill}</Text>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other Skills</Text>
        <View style={styles.skillsContainer}>
          {['Online Chat Support', 'Customer Service', 'Content', 'Phone Support', 'Customer Support'].map((skill, index) => (
            <Text key={index} style={styles.skill}>{skill}</Text>
          ))}
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.messageButtonText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.callButton}>
          <Text style={styles.callButtonText}>Call Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 16,
  },
  timeText: {
    color: '#888',
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    color: '#666',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  locationText: {
    color: '#555',
  },
  jobTypeContainer: {
    flexDirection: 'row',
  },
  jobTypeText: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  onsite: {
    borderColor: 'green',
    color: 'green',
  },
  remotely: {
    borderColor: 'green',
    color: 'green',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skill: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageButton: {
    flex: 1,
    marginRight: 8,
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  messageButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  callButton: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  callButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
