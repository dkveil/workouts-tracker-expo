import { View, Text } from 'react-native';

export function ExerciseListItem(item: Exercise) {
  return (
    <View className='bg-white w-full p-3 rounded-md gap-1'>
      <Text className='text-2xl font-medium'>{item.name}</Text>
      <Text className='text-[dimgray] uppercase'>
        {item.muscle} | {item.equipment} test
      </Text>
    </View>
  );
}
