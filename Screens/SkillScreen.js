import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import colors from '../assets/Color';

const SkillsScreen = ({ navigation }) => {
  const [skillInput, setSkillInput] = useState('');  // State for the input value
  const [selectedSkills, setSelectedSkills] = useState([]);  // State for selected skills
  const [skills, setSkills] = useState([
    "Communication",
    "Time Management",
    "Leadership",
    "Creativity",
    "Teamwork",
    "Multitasking",
    "Flexibility",
    "Critical Thinking",
  ]);  // Full list of available skills

  const [suggestedSkills, setSuggestedSkills] = useState([
    "Communication",
    "Time Management",
    "Leadership",
    "Creativity",
    "Teamwork",
    "Multitasking",
    "Flexibility",
    "Critical Thinking",
  ]);  // Example of suggested skills

  const addSkill = (skill) => {
    const newSkill = skill || skillInput.trim();
    if (newSkill && !selectedSkills.includes(newSkill)) {
      setSelectedSkills([...selectedSkills, newSkill]);  // Add new skill to selected skills

      // Remove the skill from skills and suggestedSkills
      const updatedSkills = skills.filter(item => item !== newSkill);
      const updatedSuggestedSkills = suggestedSkills.filter(item => item !== newSkill);

      setSkills(updatedSkills);  // Update skills array
      setSuggestedSkills(updatedSuggestedSkills);  // Update suggestedSkills array
      setSkillInput('');  // Clear input field
    }
  };

  const removeSkill = (index) => {
    const skillToRemove = selectedSkills[index];
    setSelectedSkills(selectedSkills.filter((_, i) => i !== index));  // Remove skill from selected skills

    // Add removed skill back to the skills list
    setSkills([...skills, skillToRemove]);
    setSuggestedSkills([...suggestedSkills, skillToRemove]);
  };

  const filterSuggestions = () => {
    return suggestedSkills.filter(skill => 
      skill.toLowerCase().includes(skillInput.toLowerCase()) && !selectedSkills.includes(skill)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => navigation.navigate("Certification")}>
          <Text style={styles.tab}>Certification</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Education")}>
          <Text style={styles.tab}>Education</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Skills")}>
          <Text style={styles.tabActive}>Skills</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileDescriptionScreen")}>
          <Text style={styles.tab}>Details</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Selected Skills:</Text>

      {/* Displaying the selected skills */}
      <View style={styles.selectedSkillsContainer}>
        {selectedSkills.map((skill, index) => (
          <TouchableOpacity key={index} onPress={() => removeSkill(index)} style={styles.skillTag}>
            <Text style={styles.skillText}>{skill}</Text>
            <Text style={styles.removeText}> ✕</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Input field for adding a new skill */}
      <TextInput
        style={styles.input}
        placeholder="Type a skill"
        value={skillInput}
        onChangeText={setSkillInput}
        onSubmitEditing={() => addSkill()}  // Add skill when the Enter key is pressed
      />

      {/* Suggested skills based on input */}
      {skillInput ? (
        <FlatList
          data={filterSuggestions()}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => addSkill(item)} style={styles.suggestionItem}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          style={styles.suggestionsList}
        />
      ) : null}

      <ScrollView contentContainerStyle={styles.skillsContainer} horizontal={false}>
        {skills.map((skill, index) => (
          <TouchableOpacity key={index} onPress={() => addSkill(skill)} style={styles.skillTag}>
            <Text style={styles.skillText}>{skill}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      
       {/* Bottom Buttons */}
       <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.previousButton}
          onPress={() => navigation.navigate("Certification")}
        >
          <Text style={styles.previousButtonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}
        onPress={() => navigation.navigate("ProfileDescriptionScreen")}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedSkillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillTag: {
    backgroundColor: '#1d29a9',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  skillText: {
    color: '#fff',
  },
  removeText: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor:'#1d29a9',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  suggestionsList: {
    maxHeight: 150,
    marginBottom: 10,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  tab: {
    fontSize: 16,
    marginHorizontal: 5,
    color: "#0000EE",
  },
  tabActive: {
    fontSize: 16,
    marginHorizontal: 5,
    color: "#0000EE",
    fontWeight: "bold",
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  previousButton: {
    backgroundColor: "#fff",
    borderColor: "#e5e5e5",
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  previousButtonText: {
    color: "#000",
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default SkillsScreen;
