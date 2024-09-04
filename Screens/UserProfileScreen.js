import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const UserProfileScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
      </View>

      {/* Profile Details */}
      <View style={styles.profileDetails}>
        <Text style={styles.name}>Steve Smith</Text>
        <Text style={styles.email}>example123@gmail.com</Text>
        <Text style={styles.location}><Ionicons name="location-outline" size={16} /> Lahore</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>BS Computer</Text>
          <Text style={styles.infoText}>5 Year</Text>
          <Text style={styles.infoText}>+92 304567898</Text>
        </View>
      </View>

      {/* About Us Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.sectionContent}>
          Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum...
        </Text>
        <TouchableOpacity>
          <Text style={styles.readMore}>Read More</Text>
        </TouchableOpacity>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Skills</Text>
        <View style={styles.skillsContainer}>
          {['Communication', 'Time Management', 'Leadership', 'Creativity', 'Teamwork', 'Multitasking', 'Flexibility', 'Critical Thinking'].map((skill, index) => (
            <Text key={index} style={styles.skillBadge}>{skill}</Text>
          ))}
        </View>
      </View>

      {/* Languages I Speak */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Languages I Speak</Text>
        <View style={styles.skillsContainer}>
          {['Urdu', 'English', 'Dutch', 'French'].map((language, index) => (
            <Text key={index} style={styles.languageBadge}>{language}</Text>
          ))}
        </View>
      </View>

      {/* Availability */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Availability</Text>
        <View style={styles.availabilityContainer}>
          <Text>Monday (12:00pm - 2:00pm, 6:00pm - 8:00pm)</Text>
          <Text>Tuesday (12:00pm - 2:00pm)</Text>
          <Text>Wednesday (12:00pm - 2:00pm)</Text>
          <Text>Thursday (6:00pm - 8:00pm)</Text>
          <Text>Friday (6:00pm - 8:00pm)</Text>
        </View>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.educationRow}>
          <View style={styles.educationCard}>
            <Text style={styles.educationTitle}>MA English</Text>
            <Text style={styles.educationSubtitle}>Mount Royal University</Text>
            <Text>2019 - 2023</Text>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
          </View>
          <View style={styles.educationCard}>
            <Text style={styles.educationTitle}>Native English</Text>
            <Text style={styles.educationSubtitle}>Mount Royal University</Text>
            <Text>2019 - 2023</Text>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
          </View>
        </View>
      </View>

      {/* Documents Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Documents</Text>
        <View style={styles.documentsContainer}>
          {['BS Computer Science', 'IELTS Certificate', 'Business English', 'Native English'].map((doc, index) => (
            <View key={index} style={styles.documentCard}>
              <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.documentImage} />
              <Text style={styles.documentText}>{doc}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  profileDetails: {
    alignItems: 'center',
    padding: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    color: 'gray',
  },
  location: {
    color: 'gray',
    marginTop: 4,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    width: '100%',
  },
  infoText: {
    fontSize: 16,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionContent: {
    color: 'gray',
  },
  readMore: {
    color: '#4CAF50',
    fontWeight: 'bold',
    marginTop: 4,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillBadge: {
    backgroundColor: '#e0e0e0',
    padding: 8,
    borderRadius: 16,
    margin: 4,
  },
  languageBadge: {
    backgroundColor: '#e0e0e0',
    padding: 8,
    borderRadius: 16,
    margin: 4,
  },
  availabilityContainer: {
    marginTop: 8,
  },
  educationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  educationCard: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    width: '48%',
  },
  educationTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  educationSubtitle: {
    color: 'gray',
    marginBottom: 8,
  },
  documentsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  documentCard: {
    width: '48%',
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    margin: 4,
    alignItems: 'center',
  },
  documentImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  documentText: {
    fontSize: 12,
  },
});

export default UserProfileScreen;
