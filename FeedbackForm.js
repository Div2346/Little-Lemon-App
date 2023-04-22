import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';


export default function FeedbackForm() {
  return(
    <ScrollView>
        <Text >
            How was your visit to Little Lemon?
        </Text>
    </ScrollView>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue'
    },
    input:{
        height:40,
        margin:12,
        borderWidth:1,
        padding:10,
        fontSize:16,
        borderColor:'red',
        backgroundColor:'teal'
        
    },
    messageInput:{
        height:100,
        margin:12,
        borderWidth:1,
        padding:10,
        fontSize:16,
        backgroundColor:'black'
    },
    infoSection:{
        fontSize:20,
        padding:20,
        marginVertical:8,
        color:'teal',
        textAlign:'center',
    }
})

