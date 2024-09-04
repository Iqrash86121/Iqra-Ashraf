import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image,SafeAreaView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const JobListingScreen = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('best');
  const [jobs, setJobs] = useState([
    {
      id: '1',
      time: '2 Hour Ago',
      title: 'Native English Teacher',
      location: 'Lahore',
      isFavorite: true,
      onsite: true,
      remotely: true,
      description: 'Lorem Ipsum is simply dummy Lorem Ipsum...',
    },
    {
      id: '2',
      time: '2 Days Ago',
      title: 'Native English Teacher',
      location: 'Lahore',
      isFavorite: false,
      onsite: false,
      remotely: true,
      description: 'Lorem Ipsum is simply dummy Lorem Ipsum...',
    },
    // Add more jobs as needed
  ]);

  const toggleFavorite = (id) => {
    setJobs(jobs.map(job => 
      job.id === id ? { ...job, isFavorite: !job.isFavorite } : job
    ));
  };

  const renderItem = ({ item }) => (
    <View style={styles.jobCard}>
      <View style={styles.jobCardHeader}>
        <Text style={styles.jobTime}>{item.time}</Text>
        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
          <MaterialIcons 
            name={item.isFavorite ? "favorite" : "favorite-border"} 
            size={24} 
            color="red" 
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.jobDescription}>{item.description}</Text>
      <Text style={styles.jobLocation}><Ionicons name="location-outline" size={16} /> {item.location}</Text>
      <View style={styles.jobTags}>
        {item.onsite && <Text style={styles.jobTag}>Onsite</Text>}
        {item.remotely && <Text style={styles.jobTag}>Remotely</Text>}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('JobDetail', { job: item })}>
        <Text style={styles.viewDetail}>View Detail</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/40' }} 
          style={styles.profilePic} 
        />
        <Text style={styles.headerTitle}>All Jobs</Text>
        
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Job"
        />
        <TouchableOpacity style={styles.filterButton}
         onPress={() => navigation.navigate("JobFilters")}>
          <Ionicons name="filter" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity 
          style={[styles.tab, selectedTab === 'best' && styles.activeTab]} 
          onPress={() => setSelectedTab('best')}
        >
          <Text style={styles.tabText}>Best Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, selectedTab === 'recent' && styles.activeTab]} 
          onPress={() => setSelectedTab('recent')}
        >
          <Text style={styles.tabText}>Recent Posted</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
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
    backgroundColor: 'white',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:10
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginRight: 8,
  },
  filterButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4CAF50',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    paddingHorizontal: 16,
  },
  jobCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  jobCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jobTime: {
    color: 'gray',
    fontSize: 14,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  jobDescription: {
    color: 'gray',
    marginBottom: 8,
  },
  jobLocation: {
    color: 'gray',
    marginBottom: 8,
  },
  jobTags: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  jobTag: {
    backgroundColor: '#4CAF50',
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginRight: 8,
    fontSize: 12,
  },
  viewDetail: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default JobListingScreen;
