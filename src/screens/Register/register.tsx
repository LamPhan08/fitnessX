import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, Platform, GestureResponderEvent } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../constants';
import styles from './styles'
import { Formik } from 'formik'
import * as Yup from 'yup'
import facebook from '../../assets/images/facebook.png'
import google from '../../assets/images/google.png'
import lock from '../../assets/images/Lock.png'
import email from '../../assets/images/Message.png'
import user from '../../assets/images/Profile.png'
import show from '../../assets/images/Show.png'
import hide from '../../assets/images/Hide.png'
import Ionicons from 'react-native-vector-icons/Ionicons'

const signupSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required!'),
  lastName: Yup.string().required('Last name is required!'),
  email: Yup.string().email('Invalid email!').required('Email is required!'),
  password: Yup.string().min(8, 'Password must contain at least 8 characters!').required('Password is required!')
})

const Register = ({navigation} : any) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const [changeColor, setChangeColor] = useState(false)

  // const { height, width } = Dimensions.get('window')
  // const navigation: any = useNavigation()


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.heyThere}>Hey there,</Text>

        <Text style={styles.createAccount}>Create an Account</Text>
      </View>

      <View style={styles.labelSection}>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
          onSubmit={values => {
            if (!toggleCheckBox) {
              setChangeColor(true)
            }
            else {
              navigation.navigate('complete_profile', values)
            }
          }}
          validationSchema={signupSchema}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View style={styles.registerContainer}>
              <View>
                <View style={[styles.label, { marginBottom: errors.firstName && touched.firstName ? 5 : 15 }]}>
                  <Image source={user} style={styles.icon} />

                  <TextInput placeholder='First Name' 
                             style={styles.input} 
                             placeholderTextColor={COLORS.secondGrayColor} 
                             value={values.firstName} 
                             onChangeText={handleChange('firstName')}/>
                  
                </View>
                
                {errors.firstName && touched.firstName ? <Text style={styles.errorMsg}>{errors.firstName}</Text> : null}

                <View style={[styles.label, { marginBottom: errors.lastName && touched.lastName ? 5 : 15 }]}>
                  <Image source={user} style={styles.icon} />

                  <TextInput placeholder='Last Name' 
                             style={styles.input}  
                             placeholderTextColor={COLORS.secondGrayColor} 
                             value={values.lastName} 
                             onChangeText={handleChange('lastName')}/>
                </View>

                {errors.lastName && touched.lastName ? <Text style={styles.errorMsg}>{errors.lastName}</Text> : null}

                <View style={[styles.label, { marginBottom: errors.email && touched.email ? 5 : 15 }]}>
                  <Image source={email} style={styles.icon} />

                  <TextInput placeholder='Email' 
                             style={styles.input} 
                             placeholderTextColor={COLORS.secondGrayColor} 
                             value={values.email}
                             keyboardType='email-address'
                             onChangeText={handleChange('email')} 
                             autoCapitalize='none'/>
                </View>

                {errors.email && touched.email ? <Text style={styles.errorMsg}>{errors.email}</Text> : null}

                <View style={[styles.label, {marginBottom: errors.password && touched.password ? 5 : 0}]}>
                  <Image source={lock} style={styles.icon} />

                  <TextInput placeholder='Password' 
                             style={styles.input} 
                             secureTextEntry={!showPassword} 
                             placeholderTextColor={COLORS.secondGrayColor} 
                             value={values.password} 
                             onChangeText={handleChange('password')} 
                             autoCapitalize='none'/>

                  <TouchableOpacity onPress={handleShowPassword}>
                    <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={18}/>
                  </TouchableOpacity>
                </View>

                {errors.password && touched.password ? <Text style={styles.errorMsg}>{errors.password}</Text> : null}

                <View style={styles.policyWrapper}>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => {
                      setToggleCheckBox(newValue)
                      
                      if (!toggleCheckBox) {
                        setChangeColor(false)
                      }
                    }}
                    tintColors={{ true: COLORS.secondGrayColor, false: changeColor ? 'red' : COLORS.secondGrayColor }}
                    tintColor={changeColor ? 'red' : COLORS.secondGrayColor}
                    onCheckColor={COLORS.secondGrayColor}
                  />

                  <Text style={[styles.policy, {color: changeColor ? 'red' : COLORS.secondGrayColor,}]}>
                    By continuing you accept our <Text style={styles.policyAndTerm}>Privacy Policy</Text> and <Text style={styles.policyAndTerm}>Term of Use</Text>
                  </Text>
                </View>
              </View>

              <View>
                <TouchableOpacity style={styles.btnSection} onPress={() => handleSubmit()}>
                  <LinearGradient colors={[COLORS.firstBrandColor, COLORS.secondBrandColor]} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} style={styles.registerBtn}>
                    <Text style={styles.btnLabel}>Register</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <View style={styles.orSection}>
                  <View style={styles.line} />

                  <Text style={styles.orLabel}>Or</Text>

                  <View style={styles.line} />
                </View>

                <View style={styles.otherLoginSection}>
                  <TouchableOpacity style={styles.otherLoginBtn}>
                    <Image source={google} style={styles.otherLoginIcon} />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.otherLoginBtn}>
                    <Image source={facebook} style={styles.otherLoginIcon} />
                  </TouchableOpacity>
                </View>

                <View style={styles.loginSection}>
                  <Text style={[styles.loginLabel, {color: COLORS.blackColor, fontFamily: 'Poppins-Regular'}]}>Already have an account? </Text>
                  <Text style={[styles.loginLabel, {color: COLORS.firstSecondaryColor, fontFamily: 'Poppins-Medium'}]}>Login</Text>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>

    </SafeAreaView>
  )
}

export default Register
