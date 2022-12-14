import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './Screens/IntroScreen';
import HomeScreen from './Screens/HomeScreen';
import CalenderScreen from './Screens/CalenderScreen';
import SearchScreen from './Screens/SearchScreen';
import ProfileScreen from './Screens/ProfileScreen';
import DescriptionScreen from './Screens/DescriptionScreen';
import NestedScreen from './Screens/NestedScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown: false}}>

      <Stack.Screen name='IntroScreen' component={IntroScreen} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='CalenderScreen' component={CalenderScreen} />
      <Stack.Screen name='SearchScreen' component={SearchScreen} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
      <Stack.Screen name='DescriptionScreen' component={DescriptionScreen} />
      <Stack.Screen name='NestedScreen' component={NestedScreen} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}


