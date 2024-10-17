import { colors } from '@/src/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, View, StyleSheet,Text, TouchableOpacity } from 'react-native'

const NotificationCard = ({img}:any) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image 
        source={{uri:img}}
        style={styles.backgroundImage}
      />
      <LinearGradient
        colors={['rgba(255,255,255,0)', colors.primary]}  // Transparent to card background color
        style={styles.gradientOverlay}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
      <View style={{marginLeft:"28%",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <View>
        <Text style={{color:"white",fontWeight:"600",fontSize:14}}>
        Elma Likes you
     </Text>
     <Text style={{color:"#bfbfbf",fontWeight:"500",fontSize:10,marginTop:4}}>
        View her profile
     </Text>
        </View>
    
     </View>
     <TouchableOpacity style={{backgroundColor:colors.deepPrimary,marginLeft:"auto",paddingHorizontal:10,elevation:1,
        paddingVertical:10, borderRadius:5,flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5
        
        }}>
             <Ionicons
            name="heart" 
            size={20}
            color="white"
          />
<Text style={{color:"#bfbfbf",fontWeight:"600"}}>
    Accept
</Text>
    </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.primary,  // Card background color
    paddingHorizontal: 15,
    borderRadius: 15,
    height: 80,
    overflow: 'hidden',
    position: 'relative',
  },
  backgroundImage: {
    height: '150%',
    width: '30%',
    position: 'absolute',
    left: 0,
    top: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '150%',
    width: '30%',  // Same as the image width
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  }
})

export default NotificationCard
