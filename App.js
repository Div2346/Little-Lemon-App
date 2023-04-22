import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import MenuItems from './components/MenuItems';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedbackForm from './components/FeedbackForm';
  



export default function App() {
  return (
    <NavigationContainer>
    <View style={{flex:1, backgroundColor:"greenyellow"}}>
      
      <LittleLemonHeader></LittleLemonHeader>
      
      <MenuItems></MenuItems>
      
      
      
      <StatusBar style="auto" />
   
    </View>
    </NavigationContainer>
    


  );
}



