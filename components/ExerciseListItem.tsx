import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';

export function ExerciseListItem(item: Exercise) {
  return (
    <Link href={`/exercise/${item.name}`} asChild>
      <Pressable className='bg-white w-full p-3 rounded-md shadow-md gap-1'>
        <Text className='text-2xl font-medium'>{item.name}</Text>
        <Text className='text-[dimgray] uppercase'>
          {item.muscle} | {item.equipment}
        </Text>
      </Pressable>
    </Link>
  );
}
