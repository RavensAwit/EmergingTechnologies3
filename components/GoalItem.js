import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      {/* Text inside the goal item */}
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#B8001F',
    padding: 7,
    marginTop: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  goalText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default GoalItem;
