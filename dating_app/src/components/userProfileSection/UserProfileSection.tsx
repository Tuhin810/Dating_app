import { colors } from '@/src/constants/Colors'
import React from 'react'
import { Image, View } from 'react-native'

const UserProfileSection = () => {
  return (
    <View style={{backgroundColor:"gray",height:"auto",width:330,
    borderRadius:20,marginTop:20,flexDirection:"row",alignItems:"center",
    justifyContent:"space-between",paddingHorizontal:15,paddingVertical:15}}>
        
        <View>
            <Image style={{width:95,height:95,borderRadius:18}}
             src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBW9IJlYiISgmFnWOPM9zjr4kRmU4DgLxrWgIBzUj1YihBG5C8oHTUdgjludAiUWzeu4&usqp=CAU"}/>
        </View>
        <View>

        </View>
    </View>
  )
}

export default UserProfileSection