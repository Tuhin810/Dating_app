import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from '../styles';
import { colors } from '@/src/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';

const SignUpThree = ({ setForm, form, setPage }: any) => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Select Your Interests</Text>
      </View>

     

      <View style={[styles.formAction, { marginTop: 20 }]}>
        <TouchableOpacity onPress={() => setPage(2)}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Go Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignUpThree;
