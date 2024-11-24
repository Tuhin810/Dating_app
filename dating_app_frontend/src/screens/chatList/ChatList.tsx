

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

const users = [
    {
      img: 'https://imgs.search.brave.com/3jzaOvImWI_MXJ1Pd3SGdWNm-tCBPQp7Qr6hcg1KXOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by93b21hbi13aXRo/LXJlZC10b3AtdGhh/dC1zYXlzLXlvdS1h/cmUtYm90dG9tXzEy/NjI3ODEtNzA2NzAu/anBn',
      name: 'Bell Burgess',
      phone: 'Can i get your number',
    },
    {
      img: 'https://imgs.search.brave.com/FK2wqs8E-TdYIhYHycE7_VAByeJPtlZ-quVo3AAWccc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/OTk2Mjc5MS9waG90/by9iZWF1dGlmdWwt/Z2lybC1wb3Npbmct/aW4taGVyLXN1bW1l/ci1ob3VzZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9RkZ1/WFF5QmFPYmhfREJt/TXNMOEk0dnFUTXVR/VE1uVHFMVmQ3RFRo/a2t4az0',
      name: 'Bernard Baker',
      phone: 'whatsup',
    },
    {
      img: 'https://imgs.search.brave.com/vhy6wLz0PYm45DIfaoBsg-ZMlGVDPixQZkid--hUxy4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9iZWF1dGlmdWwt/bW9kZWwtaXMtd29y/a2luZy1jb21wdXRl/cl8xMDEwNTcyLTIx/Nzg5LmpwZz9zaXpl/PTYyNiZleHQ9anBn',
      name: 'Elma Chapman',
      phone: 'Hellow',
    },
   
  ];

import FeatherIcon from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@/src/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

const tabs = [
  { name: 'Preferences', icon: 'settings' },
  { name: 'Help', icon: 'help-circle' },
  { name: 'Content', icon: 'align-center' },
];

export const ChatList= () => {
    const [input, setInput] = useState('');
    const filteredRows = useMemo(() => {
      const rows = [];
      const query = input.toLowerCase();
      for (const item of users) {
        const nameIndex = item.name.toLowerCase().search(query);
        if (nameIndex !== -1) {
          rows.push({
            ...item,
            index: nameIndex,
          });
        }
      }
      return rows.sort((a, b) => a.index - b.index);
    }, [input]);
  



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
          <Text style={styles.headerTitle}>Chats</Text>

          {/* <Ionicons name="settings-sharp" size={25} color="white" />  */}
        </View>
        <View style={styles.searchWrapper}>
          <View style={styles.search}>
            <View style={styles.searchIcon}>
              <FeatherIcon
                color="#ffff"
                name="search"
                size={20} />
            </View>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={val => setInput(val)}
              placeholder="Start typing.."
              placeholderTextColor="#848484"
              returnKeyType="done"
              style={styles.searchControl}
              value={input} />
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.searchContent}>
          {filteredRows.length ? (
            filteredRows.map(({ img, name, phone }, index) => {
              return (
                <View key={index} style={styles.cardWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}>
                    <View style={styles.card}>
                      {img ? (
                        <Image
                          alt=""
                          resizeMode="cover"
                          source={{ uri: img }}
                          style={styles.cardImg} />
                      ) : (
                        <View style={[styles.cardImg, styles.cardAvatar]}>
                          <Text style={styles.cardAvatarText}>{name[0]}</Text>
                        </View>
                      )}
                      <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>{name}</Text>
                        <Text style={styles.cardPhone}>{phone}</Text>
                      </View>
                      <View style={styles.cardAction}>
                        {/* <FeatherIcon
                          color="#9ca3af"
                          name="chevron-right"
                          size={22} /> */}
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })
          ) : (
            <Text style={styles.searchEmpty}>No results</Text>
          )}
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
    paddingHorizontal: 10,
    paddingBottom: 24,
    gap:10
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