import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function LittleLemonHeader() {
  return(
    <View style={headerStyles.container}>
      
        <Text style={headerStyles.header}>Little Lemon Restaurant
        
        </Text>
        
        <Text style={headerStyles.headerText}>Welcome to
            <Text style={headerStyles.innerHeaderText}> Little Lemon</Text>
            
        </Text>
        <Image  source={require('../assets/img/toplogo.png')}
                style={headerStyles.logo}
               />
        </View>
  );

  
    
  
}
const headerStyles= StyleSheet.create({
  container:{
    flex:0.1,
    backgroundColor:"orange",
    padding:40,
    
  },
  header:{
    top:10,
    fontSize:20,
    fontFamily:'monospace'
  },
  headerText:{
    top:15,
    left:18,
    fontSize:20,
   
    
   
  },
  innerHeaderText:{
    fontWeight:'bold',
    
  },
  logo:{
    top:35,
    left:85,
    height:100,
    width:550,
    padding:40,
    resizeMode:'contain',
    position:'absolute'
    


  }
})


