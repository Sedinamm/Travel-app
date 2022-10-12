import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './Screens/IntroScreen';
import HomeScreen from './Screens/HomeScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

      <Stack.Screen name='IntroScreen' component={IntroScreen} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}


