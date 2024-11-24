
import React, { useMemo, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Switch,
  Image,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@/src/constants/Colors';
import NotificationCard from '@/src/components/shared/notificationCard/NotificationCard';

export const Notification= () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
       <LinearGradient
        colors={['#261c37', 'transparent']}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.1, y: 0.5 }}
        style={{
          flex: 1,
        }}
        >
       
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Notifications</Text>

          {/* <Ionicons name="settings-sharp" size={25} color="white" />  */}
        </View>
       
        <ScrollView contentContainerStyle={styles.searchContent}>
         <NotificationCard img={"https://imgs.search.brave.com/sDwShLUOwv6X-mATXVKF-g7BhFVTqVu62Ni2tLGUY_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MzQwMDg3NTcwMzAt/MjcyOTljNDM3MWI2/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1ueDhiVzlr/Wld3bE1qQm1ZV05s/ZkdWdWZEQjhmREI4/Zkh3dw"}/>
         <NotificationCard img={"https://imgs.search.brave.com/9syQ4w2yqDXme7PEh_l_aJT46-wf4h597Fcomtm_V_Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NzM3MDAyMTY4MzAt/N2UwOGQ0N2Y4NThl/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1UVjhmR1ps/YldGc1pTVXlNRzF2/WkdWc2ZHVnVmREI4/ZkRCOGZId3c"}/>
         <NotificationCard img={"https://imgs.search.brave.com/cbv3pexwfZWOC-yhf8SmcyJ1WyAfRVv2wjqWw1TP3j4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NhL2M3/LzNjL2NhYzczY2Fh/ZjA4MjE3Y2ExODIz/ZmE0MzhhYjJhN2E4/LmpwZw"}/>
        </ScrollView>
      </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  tabs: {
    flexDirection: 'row',
    paddingTop: 16,
  },
  /** Header */
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
    marginTop:15,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: "white",
  },
  headerSubtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    marginTop: 6,
  },
  /** Search */
  search: {
    position: 'relative',
    backgroundColor: colors.primary,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal:10
  },
  searchWrapper: {
    paddingTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 20,
    // borderBottomWidth: 1,
    borderColor: '#efefef',
  },
  searchIcon: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 10,
    width: 34,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  searchControl: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    paddingLeft: 40,
    width: '100%',
    fontSize: 18,
    fontWeight: '500',
    color:"gray"
    
  },
  searchContent: {
    paddingHorizontal: 15,
    paddingVertical: 24,
    gap:15
  },
  searchEmpty: {
    textAlign: 'center',
    paddingTop: 16,
    fontWeight: '500',
    fontSize: 15,
    color: '#9ca1ac',
    
  },
  /** Card */
  card: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor:colors.primary,
    paddingHorizontal:15,
    borderRadius:22
  },
  cardWrapper: {
    // borderBottomWidth: 1,
    borderColor: '#d6d6d6',
  },
  cardImg: {
    width: 52,
    height: 52,
    borderRadius: 12,
  },
  cardAvatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ca1ac',
  },
  cardAvatarText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardBody: {
    marginRight: 'auto',
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  cardPhone: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: '#616d79',
    marginTop: 3,
  },
  cardAction: {
    paddingRight: 16,
  },
 
});