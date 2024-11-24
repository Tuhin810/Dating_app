import React from 'react'
import { View,Text } from 'react-native'
import StatsCard from '../shared/statsCard/StatsCard'

const UserStats = () => {
  return (
    <View style={{marginTop:20,paddingHorizontal:20}}>
      <Text style={{fontWeight:700,fontSize:18,marginBottom:10,paddingLeft:10}}>
        All Categories
      </Text>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <StatsCard title={"Trending"} 
            uri={"https://m.media-amazon.com/images/I/71+hgosYZ2L._AC_UF1000,1000_QL80_.jpg"}
            uri2={"https://images-cdn.ubuy.co.in/634e2a595b346e15fa3ff98e-open-a-book-grow-your-mind-new.jpg"}
            />
            <StatsCard title={"Motivation"} 
            uri={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIcSjzYJwJnPlT7sclUgGaWYylntZq9Ja-w&s"}
            uri2={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMS9RAROjCXySGHLiUNB7G3xi8hLGenbi8g&sU"}
            />
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
        <StatsCard title={"Story Books"} 
        uri={"https://m.media-amazon.com/images/I/71PPNDHGIiS._AC_UF1000,1000_QL80_.jpg"}
        uri2={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMS9RAROjCXySGHLiUNB7G3xi8hLGenbi8g&s"}
        />
        <StatsCard title={"Used Books"}
         uri={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMS9RAROjCXySGHLiUNB7G3xi8hLGenbi8g&s"}
         uri2={"https://images-cdn.ubuy.co.in/634e2a595b346e15fa3ff98e-open-a-book-grow-your-mind-new.jpg"}
         />
        </View>
        
    </View>
  )
}

export default UserStats