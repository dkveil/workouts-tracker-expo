import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from '../assets/data/exercises.json';

type Exercise = {
  name: string;
  type: string;
  muscle: string;
  difficulty: string;
  instructions: string;
};

export default function App() {
  const exercise = exercises[0] as Exercise;

  return (
    <View className='flex-1 flex justify-center items-center'>
      <Text className=''>{exercise.name}</Text>
      <Text>{exercise.type}</Text>
      <Text>{exercise.muscle}</Text>
      <Text>{exercise.difficulty}</Text>
      <Text style={{ textAlign: 'center' }}>{exercise.instructions}</Text>
      <StatusBar style='auto' />
    </View>
  );
}
