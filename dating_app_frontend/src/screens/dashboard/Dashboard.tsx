import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DashBoardInPage from '@/src/components/dashboardInPage/DashBoardInPage';
import { HomeTopBar } from '@/src/components/homeTopBar/HomeTopbar';
import UserStats from '@/src/components/userStats/UserStats';
import ChoiceCard from '@/src/components/shared/choiceCard/ChoiceCard';
import ChoiceButtons from '@/src/components/shared/choiceButtons/ChoiceButtons';

const Dashboard = () => {

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:"black" }}>
     
        <View style={styles.container}>
          <HomeTopBar/>
          <ChoiceCard/>
          <ChoiceButtons/>
        </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    // backgroundColor:"white"
    
  },
 
 
});
