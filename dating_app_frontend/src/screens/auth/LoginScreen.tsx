import React, { useContext, useState } from 'react';
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
import LottieView from 'lottie-react-native';
import kk from "../../../assets/animations/Animation - 1725867989252.json"
import { api } from '@/src/utils/api';
import AuthContext from '@/src/contexts/authContext/authContext';

export const LoginScreen = () =>{
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigation<any>();
const {setUser}=useContext(AuthContext)
  const userLogin = async()=>{
    try {
      const payload={
        identifier:form?.email, 
        password:form.password 
      }
      const result = await api.auth.userLogin(payload)
      navigation.navigate("home")
      console.log("======>user login",result)
      setUser(result)
      
    } catch (error) {
      
    }
  }

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
          <View style={styles.header}>
          <LottieView
      style={{ width: 300, height: 300 ,marginLeft:12,marginTop:20}}
        source={require('../../../assets/animations/Animation - 1725867989252.json')}
        autoPlay
        loop
      />

            <Text style={styles.title}>
              Wellcome Back
            </Text>
            <Text style={[styles.title,{marginBottom:6}]}>Please Login</Text>  
{/* 
            <Text style={styles.subtitle}>
              Get access to your portfolio and more
            </Text> */}
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email address</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="email-address"
                onChangeText={email => setForm({ ...form, email })}
                placeholder="Enter email here"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email} />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>

              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={password => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password} />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={userLogin}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign in</Text>
                </View>
              </TouchableOpacity>
            </View>

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
    color: '#fff',
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