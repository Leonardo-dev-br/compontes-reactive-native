import { StyleSheet, View } from 'react-native';
import Avatar from './Avatar';
import ToDoList from './ToDoList';

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar imageUrl='http://www.github.com/Leonardo-dev-br.png' />
      <ToDoList 
        task="Sample Task" 
        completed={false} 
        onToggle={() => console.log('Task toggled')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
