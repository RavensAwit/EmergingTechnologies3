import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      {/* TextInput for entering goals */}
      <TextInput
        placeholder="Type your goal here!"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />

      {/* Add Goal Button */}
      <TouchableOpacity style={styles.addButton} onPress={addGoalHandler}>
        <Text style={styles.addButtonText}>ADD GOAL</Text>
      </TouchableOpacity>

      {/* One Piece Image at the bottom of the input */}
      <Image
        source={require('../assets/images/onepiece-png.png')}
        style={styles.smallImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  textInput: {
    borderColor: '#384B70',
    borderWidth: 2,
    borderRadius: 7,
    width: '100%',
    padding: 13,
    marginRight: 8,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#1A3636',
    paddingVertical: 12,
    width: '70%',
    paddingHorizontal: 20,
    borderRadius: 7,
    marginTop: 10,
  },
  addButtonText: {
    color: '#F1F8E8',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  smallImage: {
    width: '100%',
    height: '38%',
    marginTop: 2,
    marginBottom: -25,
  },
});

export default GoalInput;
