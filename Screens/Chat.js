import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView, // Correct import
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hello! peter how are you?",
      sender: "peter",
      type: "received",
    },
    {
      id: "2",
      text: "Hey fidz! I’m well thank you WAY?",
      sender: "user",
      type: "sent",
    },
    {
      id: "3",
      text: "Sound good i am also good 😊",
      sender: "peter",
      type: "received",
    },
    {
      id: "4",
      text: "Lorem Ipsum is simply dummy Lorem Ipsum...",
      sender: "peter",
      type: "received",
    },
    {
      id: "5",
      text: "Lorem Ipsum is simply dummy Lorem Ipsum...",
      sender: "peter",
      type: "sent",
    },
    {
      id: "6",
      text: "Sound good i am also good 😊",
      sender: "peter",
      type: "received",
    },
    {
      id: "7",
      text: "Sound good i am also good 😊",
      sender: "peter",
      type: "received",
    },
    {
      id: "8",
      text: "Sound good i am also good 😊",
      sender: "peter",
      type: "received",
    },
  ]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Math.random().toString(),
          text: inputText,
          sender: "user",
          type: "sent",
        },
      ]);
      setInputText("");
    }
  };

  const renderItem = ({ item }) => {
    const isSentByUser = item.type === "sent";
    return (
      <View
        style={[
          styles.messageContainer,
          isSentByUser ? styles.sentMessage : styles.receivedMessage,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            isSentByUser ? styles.sentMessageText : styles.receivedMessageText,
          ]}
        >
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/profile.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.headerText}>Peter Park</Text>
        <Icon name="phone" size={24} color="#000" style={styles.phoneIcon} />
      </View>

      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type Something..."
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  phoneIcon: {
    marginRight: 10,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageContainer: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#4A90E2",
  },
  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E5E5EA",
  },
  sentMessageText: {
    color: "#fff",
  },
  receivedMessageText: {
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },
  sendButton: {
    marginLeft: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#4A90E2",
    borderRadius: 20,
  },
  sendButtonText: {
    color: "#fff",
  },
});

export default ChatScreen;
