import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from '../styles';
import { colors } from '@/src/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';

const SignUpTwo = ({ setForm, form, setPage }: any) => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Select Your Gender</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* Male Button */}
        <TouchableOpacity
           onPress={() =>{
            setForm({ ...form, gender: 'MALE' })
            setPage(3)
          }}
          style={{
            height: 100,
            width: '48%',
            backgroundColor: form.gender === 'MALE' ? colors.primary : colors.deepPrimary,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FontAwesome5 name="male" size={28} color="white" />
          <Text style={{ color: 'white', fontSize: 14 }}>Male</Text>
        </TouchableOpacity>

        {/* Female Button */}
        <TouchableOpacity
          onPress={() =>{
            setForm({ ...form, gender: 'FEMALE' })
            setPage(3)
          }}
          style={{
            height: 100,
            width: '48%',
            backgroundColor: form.gender === 'FEMALE' ? colors.primary : colors.deepPrimary,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FontAwesome5 name="female" size={28} color="white" />
          <Text style={{ color: 'white', fontSize: 14 }}>Female</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.formAction, { marginTop: 20 }]}>
        <TouchableOpacity onPress={() => setPage(1)}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Go Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignUpTwo;
