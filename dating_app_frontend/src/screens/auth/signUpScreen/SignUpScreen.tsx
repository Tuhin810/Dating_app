
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import { colors } from '@/src/constants/Colors';
import SignupOne from './signupOne/SignupOne';
import SignUpTwo from './signupTwo/SignUpTwo';
import SignUpThree from './signupThree/SignUpThree';

export const SignUpScreen = () =>{
  const [form, setForm] = useState({
    email: '',
    password: '',
    full_name:'',
    gender:'',
    age:0
  });
  const [page,setPage]=useState(1)
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:"black" }}>
          <LinearGradient
      colors={['#261c37', 'transparent']}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.1, y: 0.4 }}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <KeyboardAwareScrollView>
         

          <View style={styles.form}>
            {
                page === 1 ?
                <SignupOne setForm={setForm} form={form} setPage={setPage}/>
                :page === 2 ?
                <SignUpTwo setForm={setForm} form={form} setPage={setPage}/>
                :page === 3 ?
               <SignUpThree setForm={setForm} form={form} setPage={setPage}/>
               :null
            }
            <TouchableOpacity
          onPress={() => {
            console.log("first")
          }}
          style={{ marginTop: 'auto' }}>
          <Text style={styles.formFooter}>
            Don't have an account?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
          </Text>
        </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>

        
      </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 2,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingTop:20
  },
  gradient: {
    flex: 1,
    height: '10%',
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: 'white',

  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  /** Header */
  header: {
    marginVertical: 25,
    paddingLeft:30,
  },
  headerImg: {
    width: 280,
    height:280,
    alignSelf: 'center',
    marginBottom:30,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#075eec',
    textAlign: 'center',
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: 'gray',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: 'gray',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '1a1a1a',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});