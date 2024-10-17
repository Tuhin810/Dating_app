import { colors } from '@/src/constants/Colors'
import React from 'react'
import { View } from 'react-native'
import SingleButton from './singlButton/SinglButton'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';


const ChoiceButtons = () => {
  return (
   <View style={{paddingHorizontal:40,width:"100%",marginTop:"10%",marginLeft:"auto",marginRight:"auto",
    flexDirection:"row",justifyContent:"space-between"
   }}>
     <SingleButton icon={Entypo} name={"cross"} color="pink" size={35}/>
     <SingleButton icon={Ionicons} name={"chatbubble-ellipses-sharp"} color="#008ae6"  size={34}/>
    <SingleButton icon={AntDesign} name={"heart"} color="red"  size={32}/>
   </View>
  )
}

export default ChoiceButtons