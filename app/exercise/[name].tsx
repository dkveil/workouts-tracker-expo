import { ScrollView, View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import exercises from '../../assets/data/exercises.json';
import { Stack } from 'expo-router';

export default function ExerciseDetailsScreen() {
  const params = useLocalSearchParams();

  const exercise = exercises.find((exercise: Exercise) => exercise.name === params.name);

  if (!exercise) {
    return <Text>Exercise not found</Text>;
  }

  return (
    <ScrollView className='flex-1 flex p-3 gap-3 mt-4'>
      <Stack.Screen options={{ title: exercise.name, headerShown: true }} />
      <View className='bg-white rounded-md p-3'>
        <Text className='text-2xl font-bold'>{exercise.name}</Text>
        <View className='mt-2'>
          <Text className='text-[dimgray] uppercase'>
            <Text className='font-semibold'>Difficulty:</Text> {exercise.difficulty}
          </Text>

          <Text className='text-[dimgray] uppercase'>
            <Text className='font-semibold'>Type:</Text> {exercise.type}
          </Text>

          <Text className='text-[dimgray] uppercase'>
            <Text className='font-semibold'>Muscle:</Text> {exercise.muscle}
          </Text>

          <Text className='text-[dimgray] uppercase'>
            <Text className='font-semibold'>Equipment:</Text> {exercise.equipment}
          </Text>
        </View>
      </View>

      <View className='bg-white rounded-md p-3 mt-3'>
        <Text className='text-2xl font-semibold'>Instructions</Text>
        <Text>{exercise.instructions}</Text>
      </View>
    </ScrollView>
  );
}
