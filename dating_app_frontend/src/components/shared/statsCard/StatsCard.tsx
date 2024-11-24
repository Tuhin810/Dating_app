import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '@/src/constants/Colors';

const StatsCard = ({ title ,uri,uri2}: any) => {
  return (
    <TouchableOpacity 
      style={{
        backgroundColor: colors.primary,
        width: 160,
        height: 80,
        borderRadius: 20,
        padding: 15,
        overflow: 'hidden' // Ensures the image stays within the component
      }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>{title}</Text>
        <View 
          style={{
            backgroundColor: 'white',
            borderRadius: 999,
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
          }}>
          <Feather name="arrow-up-right" size={24} color="black" />
        </View>
      </View>
      <Image
        style={{
          height: 50,
          width: 50,
          position: 'absolute',
          top: 53,
          left: 20,
          resizeMode: 'contain', // Ensure the image is contained within the boundaries
        }}
        source={{
          uri: uri2,
        }}
      />
      <Image
        style={{
          height: 50,
          width: 50,
          position: 'absolute',
          top: 45,
          left: 10,
          resizeMode: 'contain', // Ensure the image is contained within the boundaries
          
        }}
        source={{
          uri: uri,
        }}
      />
    </TouchableOpacity>
  );
};

export default StatsCard;
