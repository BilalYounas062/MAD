import React from 'react';
import { View, Text, Button,FlatList,StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  let users=[
    {
        id:1,name:"Bilal Younas"
    },
    {
        id:2,name:"Ali"
    },
    {
        id:3,name:"Jamshed"
    }
    
  ]
  return (
    <View>
      <Text  style={{fontSize:30,padding:40}}>Home Screen</Text>
   <FlatList 
   data={users}
   renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
   keyExtractor={item=>item.id}
   />
    </View>
  );
};

export default HomeScreen;


const styles=StyleSheet.create({
  item:{
      fontSize:30,
      padding:20,
      borderWidth:2,
      borderColor:'blue',
      margin:10,
      color:'blue',
      backgroundColor:"yellow"
  }})