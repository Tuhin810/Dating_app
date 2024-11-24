import React from 'react'
import { styles } from '../styles'
import { TouchableOpacity, View, Text, TextInput } from 'react-native'

const SignupOne = ({ setForm, form, setPage }: any) => {
    return (
        <>
            <View style={styles.header}>

                <Text style={styles.title}>
                    Wellcome to Circle
                </Text>
                <Text style={[styles.title, { marginBottom: 6 }]}>Please Sign up</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.inputLabel}>User name</Text>

                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    keyboardType="default"
                    onChangeText={full_name => setForm({ ...form, full_name })}
                    placeholder="Enter your name here"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form?.full_name} />
            </View>

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
                    value={form?.email} />
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
                    value={form?.password} />
            </View>
            <View style={styles.input}>
                <Text style={styles.inputLabel}>Age</Text>

                <TextInput
                    autoCorrect={false}
                    keyboardType='number-pad'
                    clearButtonMode="while-editing"
                    onChangeText={age => setForm({ ...form, age })}
                    placeholder="Enter your age"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    secureTextEntry={true}
                    value={form?.age} />
            </View>




            <View style={styles.formAction}>
                <TouchableOpacity
                    onPress={() => setPage(2)}
                >
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Next</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default SignupOne