import AuthContext from '@/src/contexts/authContext/authContext'
import { LoginScreen } from '@/src/screens/auth/LoginScreen'
import { HomeScreen } from '@/src/screens/home/Home'
import { LandingScreen } from '@/src/screens/landing/LandingScreen'
import React, { useContext } from 'react'
import { View ,Text} from 'react-native'

const index = () => {
  const {user}=useContext(AuthContext)
  return (
    <>
    {
      !user  ? <HomeScreen/> : <HomeScreen/>
    }
      
    </>
  )
}

export default index