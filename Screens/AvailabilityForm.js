import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function AvailabilityForm({ navigation }) {
  const [availability, setAvailability] = useState({
    Monday: { enabled: false, slots: [{ from: "", to: "" }] },
    Tuesday: { enabled: false, slots: [{ from: "", to: "" }] },
    Wednesday: { enabled: false, slots: [{ from: "", to: "" }] },
    Thursday: { enabled: false, slots: [{ from: "", to: "" }] },
    Friday: { enabled: false, slots: [{ from: "", to: "" }] },
    Saturday: { enabled: false, slots: [{ from: "", to: "" }] },
    Sunday: { enabled: false, slots: [{ from: "", to: "" }] },
  });

  const handleToggleDay = (day) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], enabled: !prev[day].enabled },
    }));
  };

  const handleTimeChange = (day, index, type, value) => {
    const updatedSlots = [...availability[day].slots];
    updatedSlots[index][type] = value;
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], slots: updatedSlots },
    }));
  };

  const addTimeSlot = (day) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: [...prev[day].slots, { from: "", to: "" }],
      },
    }));
  };

  const handleSubmit = () => {
    console.log("Availability:", availability);
    navigation.navigate("IDCardVerificationScreen");
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileDescriptionScreen")}>
        <Text style={styles.tab}>Details</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AvailabilityForm")}>
        <Text style={styles.tabActive}>Availability</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("IDCardVerificationScreen")}>
        <Text style={styles.tab}>ID Card Verification</Text>
        </TouchableOpacity>
        
      </View>
      <Text style={styles.headerText}>Availability Form</Text>
      {daysOfWeek.map((day) => (
        <View key={day} style={{ marginBottom: 16 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>{day}</Text>
            <Switch
              value={availability[day].enabled}
              onValueChange={() => handleToggleDay(day)}
            />
          </View>
          {availability[day].enabled &&
            availability[day].slots.map((slot, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 8,
                }}
              >
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 4,
                    padding: 8,
                    flex: 1,
                    marginRight: 8,
                  }}
                  placeholder="From"
                  value={slot.from}
                  onChangeText={(value) =>
                    handleTimeChange(day, index, "from", value)
                  }
                />
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 4,
                    padding: 8,
                    flex: 1,
                  }}
                  placeholder="To"
                  value={slot.to}
                  onChangeText={(value) =>
                    handleTimeChange(day, index, "to", value)
                  }
                />
              </View>
            ))}
          {availability[day].enabled && (
            <Button
              title="Add another time slot"
              onPress={() => addTimeSlot(day)}
            />
          )}
        </View>
      ))}
      <Button title="Next" onPress={handleSubmit} />
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
 
});