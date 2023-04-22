import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { StyleSheet, Text, View, ScrollView, FlatList, SectionList, Pressable,Image, useColorScheme} from 'react-native';



const menuItemsToDisplay=[
   {title:'Appetizers',
    data:['Hummus','Moutabal','Falafel','Marinated Olives','Kofta','Eggplant Salad',],},
   {title:'Main Dishes',
    data:['Lentil Burger','Smoked Salmon','Kofta Burger','Turkish Kebab']},
   {title:'Sides',
    data:['Fries','Buttered Rice','Bread Sticks','Pita Pocket','Lentil Soup','Greek Salad','Rice Pilaf']},
   {title:'Desserts',
    data:['Baklava','Tartufo','Tiramisu','Panna Cotta']},
];

const Separator = () =>
    <View style={menuStyles.separator}></View>



const Footer = () =>
    <View><Text style={menuStyles.footerText}>All Rights Reserved by Little Lemon 2023</Text></View>


const MenuItems = () =>{

    const colorScheme = useColorScheme();

    const [showMenu, setShowMenu] = useState(false);

    const Item = ({name}) => {
        return(
            <View style={menuStyles.innerContainer}>
                <Text style={menuStyles.itemText}>{name}</Text>
            </View>
        )
    }

    const renderItem = ({item}) => <Item name={item} /> 

    const renderSectionHeader = ({section:{title}}) =>{
        return(
        <View><Text style={menuStyles.sectionHeader}>{title}</Text></View>
        )
    }

    return(
    <View style={menuStyles.container}>
        {!showMenu && (
            <Image style={menuStyles.logo}
            source={require('../assets/img/logo1.png')}></Image>
        )}

        {!showMenu && (
            <Text style={menuStyles.infoSection}>
            Little Lemon is a charming neighbourhood bistro that serves simple food and
            classic cocktails in a lively but casual environment. View our menu to explore 
            our cuisine with daily specials!
        </Text>
        )}
        <Pressable style={menuStyles.button} onPress={()=>{setShowMenu(!showMenu);}}>
            <Text style={menuStyles.buttonText}>{showMenu?'Home':'View Menu'}</Text>
        </Pressable>
       {showMenu && (
        <SectionList sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={Footer}
         />
       )}
            
            
        
        
    </View>
    )
};

const menuStyles= StyleSheet.create({
    container:{
        flex:1,
    },
    innerContainer:{
        paddingTop:40,
         paddingLeft:40, 
        backgroundColor:"palegreen"
    },
    headerText:{
        fontSize:40,
        flexWrap:'wrap', 
        color:'orange',
        marginLeft:88,
        marginBottom: 10,
        

    },
    itemText:{
        fontSize:25,
        marginBottom:20,
        marginLeft:85
    },
    separator:{
        borderBottomWidth:1,
        borderColor:'orange'
    },
    footerText:{
        fontSize:20,
        flexWrap:"wrap",
        marginLeft:16,
        marginBottom:5
    },
    sectionHeader:{
        fontSize:40,
        color:'black',
        marginLeft:81,
        fontFamily: 'monospace'
    },
    infoSection:{
        
        fontSize:18,
        color:'black',
        marginLeft:5,
        fontFamily:'monospace',
        textAlign:'center'
    },
    button:{
        backgroundColor:'orange',
        margin:40,
        padding:20,
        width:310,
        borderRadius:10
    },
    buttonText:{
        fontSize:30,
        textAlign:'center',
        fontFamily:'monospace',
        color:'black',   
    },
    logo:{
        height:100,
        width:300,
        resizeMode:'contain',
        margin:48
    }
})

export default MenuItems;