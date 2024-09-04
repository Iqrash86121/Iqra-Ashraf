import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://example.com/avatar.png' }} // Replace with the actual image URL or local image path
          style={styles.avatar}
        />
        <Text style={styles.name}>Peter Park</Text>
        <Text style={styles.email}>peterpark12@gmail.com</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <MenuItem icon="briefcase" label="Saved jobs" />
        <MenuItem icon="chatbubble" label="Messages" />
        <MenuItem icon="settings" label="Account Settings" />
        <MenuItem icon="information-circle" label="About Us" />
        <MenuItem icon="document-text" label="Terms of Use" />
      </View>

      {/* Log Out Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const MenuItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Ionicons name={icon} size={24} color="#333" />
    <Text style={styles.menuLabel}>{label}</Text>
    <MaterialIcons name="keyboard-arrow-right" size={24} color="#333" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 20,
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuLabel: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
