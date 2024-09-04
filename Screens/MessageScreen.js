import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const messages = [
  { id: '1', name: 'Peter Park', time: '3:00 PM', message: 'Your session has been done', avatar: 'https://example.com/avatar1.png' },
  { id: '2', name: 'Peter Park', time: '3:00 PM', message: 'Your session has been done', avatar: 'https://example.com/avatar2.png' },
  { id: '3', name: 'Peter Park', time: '3:00 PM', message: 'Your session has been done', avatar: 'https://example.com/avatar3.png' },
  { id: '4', name: 'Peter Park', time: '3:00 PM', message: 'Your session has been done', avatar: 'https://example.com/avatar4.png' },
  { id: '5', name: 'Peter Park', time: '3:00 PM', message: 'Your session has been done', avatar: 'https://example.com/avatar5.png' },
  { id: '6', name: 'Peter Park', time: '3:00 PM', message: 'Your session has been done', avatar: 'https://example.com/avatar6.png' },
];

const MessageScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.time}>{item.time}</Text>
        <View style={styles.statusDot} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity>
          <Ionicons name="create-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput placeholder="Search Here" style={styles.searchInput} />
      </View>

      {/* Messages List */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#888',
    marginTop: 2,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  time: {
    color: '#888',
    fontSize: 12,
  },
  statusDot: {
    width: 10,
    height: 10,
    backgroundColor: '#06c',
    borderRadius: 5,
    marginTop: 5,
  },
});

export default MessageScreen;
