import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { colors } from '@/src/constants/Colors'

const SingleButton = ({ icon: Icon,name ,color,size}:any) => {
  return (
    <TouchableOpacity style={{
      height: 65, 
      width: 65, 
      backgroundColor: colors.primary, 
      borderRadius: 9999, 
      alignItems: 'center', 
      justifyContent: 'center',
      elevation:4,
      // shadowColor:"gray"
    }}>
      {/* Render the icon if provided */}
      {Icon && <Icon name={name} size={size} color={color} />}
    </TouchableOpacity>
  )
}

export default SingleButton
