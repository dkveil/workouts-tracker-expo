import { StatusBar } from 'expo-status-bar';
import { View, FlatList } from 'react-native';
import exercises from '../assets/data/exercises.json';
import { ExerciseListItem } from '../components';

export default function App() {
  return (
    <View className='flex-1 flex justify-center px-3 mt-6'>
      <FlatList
        contentContainerClassName='gap-2'
        data={exercises as Exercise[]}
        keyExtractor={(item, index) => item.name + index}
        renderItem={props => {
          const { item, index: _index } = props;

          return <ExerciseListItem {...item} />;
        }}
      />

      <StatusBar style='auto' />
    </View>
  );
}
