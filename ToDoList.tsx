import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ToDoProps {
  task: string;
  completed: boolean;
  onToggle: () => void;
}

const ToDoItem: React.FC<ToDoProps> = ({ task, completed, onToggle }) => {
  return (
    <TouchableOpacity
      style={[styles.taskItem, completed && styles.taskCompleted]}
      onPress={onToggle}
    >
      <Text style={styles.taskText}>{task}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  taskCompleted: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ToDoItem;