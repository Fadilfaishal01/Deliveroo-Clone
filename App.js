import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {TailwindProvider} from 'tailwindcss-react-native';

export default function App() {
  return (
    <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-dark">
        <Text className='text-red-500'>Open up App.js to start working on your app! 2</Text>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}
