import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';

const notifications = [
  {
    id: '1',
    name: 'Patrick',
    action: 'view your profile...',
    time: 'Just Now',
    image: require('../assets/profile.jpg'), // Local image
  },
  {
    id: '2',
    name: 'Alison',
    action: 'find a English teacher for onsite',
    time: '2 Hr Ago',
    image: require('../assets/profile.jpg'), // Local image
  },
  // ... other notifications
];

const NotificationScreen = () => {
  const renderNotification = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Image source={item.image} style={styles.profileImage} />
      <View style={styles.notificationText}>
        <Text style={styles.name}>{item.name} {item.action}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.markAllRead}>Mark all as read</Text>
        </TouchableOpacity>
      </View>

      <TextInput 
        placeholder="Search Notification" 
        style={styles.searchInput} 
      />

      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <>
            <Text style={styles.sectionTitle}>Today</Text>
          </>
        )}
      />

      <View>
        <Text style={styles.sectionTitle}>Yesterday</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  markAllRead: {
    color: '#007bff',
    fontSize: 16,
  },
  searchInput: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 20,
  },
  notificationContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  notificationText: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  time: {
    color: '#888',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  }
});

export default NotificationScreen;
