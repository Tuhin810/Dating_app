
import { colors } from '@/src/constants/Colors';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
  } from 'react-native';

export const styles = StyleSheet.create({
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
      marginTop: 10,
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