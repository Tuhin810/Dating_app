import { colors } from '@/src/constants/Colors';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import AuthContext from '@/src/contexts/authContext/authContext';

export const HomeTopBar = () => {
  const {user}=useContext(AuthContext)
  console.log("====>user",user)
  return (
         <LinearGradient
         colors={['#261c37', 'transparent']}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.1, y: 0.9}}
        style={styles.gradient}
      >
      <View style={styles.container}>
        <View>
          <View style={styles.actionWrapper}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}

              // https://imgs.search.brave.com/0JK01LRyhFWDGtVX-dnSIQj06a62omcnZYJokQMMyTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/My8zMS8xOS81OC9h/dmF0YXItMTI5NTQz/MF82NDAucG5n
              style={{ marginRight: 'auto' ,flexDirection:"row",alignItems:"center",gap:5}}>
              <View style={styles.action2}>
                <Image style={{width:"100%",height:"100%", borderRadius: 999}} 
                source={{uri:"https://imgs.search.brave.com/gZfgwphredhRHbRNYLUlnQLJin1Q3Jtrdf1qWQOpGKA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wdWIt/c3RhdGljLmZvdG9y/LmNvbS9hc3NldHMv/cHJvamVjdHMvcGFn/ZXMvNDEyYmQ3ZDk1/MzAyNDNmZmE5MDRl/OGM2NzAzYzk0Njcv/Zm90b3ItOWYxMTgy/OTViYTBkNGIzYzkw/MDcwZTIwN2YyOWM0/ZDYuanBn"}}/>
                </View>
                <View>
                <Text style={{fontWeight:700,fontSize:19,color:"white"}}>
                  {user?.full_name}
                </Text>
                <Text style={{fontWeight:600,fontSize:13,color:"gray"}}>
                {/* <Feather
                    color={"gray"}
                  name="navigation"
                  size={15} />  */}
                  Umang vihar , kolkata
                </Text>
                </View>
            </TouchableOpacity>

            
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.action}>
              <FontAwesome name="diamond" size={19} color="white" /> 
              <Text style={{fontSize:18,fontWeight:"400",color:"white"}}>
                2
              </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* <Text style={styles.title}>Search Books</Text> */}

          {/* <View style={styles.search}>
            <View style={styles.searchInput}>
              <View style={styles.inputWrapper}>
                <TextInput
                  placeholder="Enter tracking code"
                  placeholderTextColor="#9eadba"
                  style={styles.input} />

                <View style={styles.inputIcon}>
                  <Feather
                    color={colors.secendory}
                    name="search"
                    size={16} />
                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Search</Text>
              </View>
            </TouchableOpacity>
          </View> */}
        </View>

      </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop:50
  },
  gradient: {
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: 'white',
    marginTop: 24,
    marginBottom: 16,
  },
  /** Action */
  action: {
    width: "auto",
    height: 48,
    borderRadius: 12,
    marginHorizontal: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row",
    paddingHorizontal:12,
    gap:5
  },
  action2: {
    width: 45,
    height: 45,
    borderRadius: 999,
    marginHorizontal: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: -8,
  },
  /** Search */
  search: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginRight: 12,
  },
  /** Input */
  input: {
    height: 44,
    backgroundColor: '#1a1a1a',
    paddingLeft: 44,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth:0.5,
    borderColor:"black"
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  inputIcon: {
    position: 'absolute',
    width: 44,
    height: 44,
    top: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor:colors.primary ,
    borderColor: colors.primary ,
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
  /** Placeholder */
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 24,
    padding: 0,
    backgroundColor: 'transparent',
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});