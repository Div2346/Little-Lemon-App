import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';


 const HomeScreen = () =>{
  return (
    <View style={homeScreenStyles.container}>
    <ScrollView >
        <ImageBackground source={require('../assets/img/illustration.jpg')}
                                style={homeScreenStyles.bgImg} >
        <Text style={homeScreenStyles.title}>Little Lemon, your local Mediterranean Bistro</Text>
        </ImageBackground>
               
           

      
      
      <StatusBar style="auto" />
   
    </ScrollView>
    </View>
  );
 }


const homeScreenStyles= StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        marginTop:0,
        backgroundColor:'white',
        height:100
        
    },
    title:{
        marginTop:16,
        paddingVertical:10,
        color:'red',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    bgImg:{
      resizeMode:'cover',
      flex:1,
    },

})
 
export default HomeScreen;
