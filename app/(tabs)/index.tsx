import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
import GoalItem from '../../components/GoalItem';
import GoalInput from '../../components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }, // Create unique keys for FlatList
    ]);
  }

  return (
    <View style={styles.appContainer}>
      {/* Displaying an image */}
      <Image
        style={styles.image}
        source={{ uri: 'https://cdn.oneesports.gg/cdn-data/2024/02/Anime_MonkeyDLuffy.jpg' }}
      />

      {/* GoalInput component */}
      <GoalInput onAddGoal={addGoalHandler} />

      {/* FlatList rendering GoalItem components */}
      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem text={itemData.item.text} />
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  goalListContainer: {
    flex: 4,
    backgroundColor: '#FCFAEE',
    marginTop: -135,
    borderRadius: 10,
    padding: 10,
    paddingTop: 5,
  },
});
