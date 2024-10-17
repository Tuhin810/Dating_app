import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { ProfileScreen } from '../profile/ProfileScreen'

const Settings = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
<ProfileScreen/>
    </SafeAreaView>
  )
}

export default Settings