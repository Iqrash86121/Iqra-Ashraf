import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Checkbox, RadioButton } from 'react-native-paper';

const JobFilters = ({navigation}) => {
  const [jobType, setJobType] = useState({
    onsite: true,
    remotely: false,
  });

  const [postedDate, setPostedDate] = useState('all');
  const [jobLocation, setJobLocation] = useState('all');

  const handleJobTypeChange = (type) => {
    setJobType((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  const handlePostedDateChange = (value) => {
    setPostedDate(value);
  };

  const handleJobLocationChange = (value) => {
    setJobLocation(value);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Job Type</Text>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => handleJobTypeChange('onsite')}>
          <Checkbox
            status={jobType.onsite ? 'checked' : 'unchecked'}
          />
          <Text style={styles.checkboxLabel}>Onsite</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleJobTypeChange('remotely')}>
          <Checkbox
            status={jobType.remotely ? 'checked' : 'unchecked'}
          />
          <Text style={styles.checkboxLabel}>Remotely</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Posted Date</Text>
      <RadioButton.Group onValueChange={value => handlePostedDateChange(value)} value={postedDate}>
        <RadioButton.Item label="All Jobs" value="all" />
        <RadioButton.Item label="Last 24 Hours" value="24h" />
        <RadioButton.Item label="Last 3 Days" value="3d" />
        <RadioButton.Item label="Last 7 Days" value="7d" />
        <RadioButton.Item label="Last 14 Days" value="14d" />
      </RadioButton.Group>

      <Text style={styles.sectionTitle}>Job Location</Text>
      <RadioButton.Group onValueChange={value => handleJobLocationChange(value)} value={jobLocation}>
        <RadioButton.Item label="All Job Locations" value="all" />
        <RadioButton.Item label="Lahore" value="lahore" />
        <RadioButton.Item label="Karachi" value="karachi" />
        <RadioButton.Item label="Islamabad" value="islamabad" />
        <RadioButton.Item label="Sialkot" value="sialkot" />
        <RadioButton.Item label="Faisalabad" value="faisalabad" />
        <RadioButton.Item label="Rawalpindi" value="rawalpindi" />
        {/* Add more locations if needed */}
      </RadioButton.Group>

      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply Filters</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 8,
  },
  applyButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default JobFilters;
