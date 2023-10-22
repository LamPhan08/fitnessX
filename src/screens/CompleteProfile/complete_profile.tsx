import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import completeProfile from '../../assets/images/completeProfile.png'
import styles from './styles'
import { Formik } from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-native-date-picker'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS } from '../../constants'
import genderImg from '../../assets/images/gender.png'
import calendar from '../../assets/images/Calendar.png'
import weightScale from '../../assets/images/weight-scale.png'
import heightIcon from '../../assets/images/Swap.png'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'

const gender = ["Male", "Female"]

const completeProfileSchema = Yup.object().shape({
  gender: Yup.string().required('Please choose your gender!'),
  weight: Yup.string().required('Please enter your weight!'),
  height: Yup.string().required('Please enter your height!'),
})

const CompleteProfile = ({ route, navigation }: any) => {
  const registerValues = route.params
  // console.log(registerValues)

  const [date, setDate] = useState(new Date())
  const [openDatePicker, setOpenDatePicker] = useState(false)

  // console.log(date)

  return (
    <View style={styles.container}>
      <Image source={completeProfile} style={styles.img} />

      <View style={styles.profileText}>
        <Text style={styles.complete}>Let's complete your profile</Text>

        <Text style={styles.knowMore}>It's will help us to know more about you!</Text>
      </View>

      <View style={styles.labelSection}>
        <Formik initialValues={{
          gender: '',
          dateOfBirth: date.toLocaleDateString(),
          weight: '',
          height: ''
        }}
          onSubmit={values => {
            navigation.navigate('choose_goal', {...registerValues, ...values})
          }}
          validationSchema={completeProfileSchema}
        >
          {({ handleChange, handleSubmit, errors, values, touched }) => (
            <View style={styles.completeProfileSection}>
              <View style={{ width: '100%' }}>
                <View style={[styles.label, { paddingRight: 0, marginBottom: errors.gender && touched.gender ? 5 : 15 }]}>
                  <Image source={genderImg} style={styles.icon} />

                  <SelectDropdown data={gender}
                    onSelect={(selectedItem) => {
                      values.gender = selectedItem
                      console.log(values.gender)
                    }}
                    defaultButtonText='Choose Gender'
                    buttonStyle={{
                      backgroundColor: COLORS.borderColor,
                      flex: 1,
                      borderRadius: 14,
                      alignItems: 'center'
                    }}
                    buttonTextStyle={{
                      fontFamily: 'Poppins-Regular',
                      fontSize: 12,
                      textAlign: 'left'
                    }}
                    renderDropdownIcon={() => <EvilIcons name='chevron-down' size={22} />}
                    dropdownIconPosition='right'
                    dropdownStyle={{ borderRadius: 14 }}
                    rowTextStyle={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: COLORS.blackColor }}
                  />
                </View>

                {errors.gender && touched.gender ? <Text style={styles.errorMsg}>{errors.gender}</Text> : null}

                <View style={[styles.label, { marginBottom: 15 }]}>
                  <Image source={calendar} style={[styles.icon, { marginRight: 15 }]} />

                  <TouchableOpacity style={styles.dateofbirthBtn} onPress={() => setOpenDatePicker(true)}>
                    <Text style={styles.btnText}>{date.toLocaleDateString()}</Text>
                  </TouchableOpacity>

                  <DatePicker
                    modal
                    open={openDatePicker}
                    date={date}
                    onConfirm={(date) => {
                      setOpenDatePicker(false)
                      setDate(date)
                      values.dateOfBirth = date.toLocaleDateString()
                      // console.log(values.dateOfBirth)
                    }}
                    onCancel={() => {
                      setOpenDatePicker(false)
                    }}
                    mode='date'
                  />
                </View>

                <View style={[styles.twoFinalLabels, {marginBottom: errors.weight && touched.weight ? 5 : 15}]}>
                  <View style={[styles.label, { flex: 1 }]}>
                    <Image source={weightScale} style={[styles.icon, { marginRight: 15 }]} />

                    <TextInput placeholder='Your Weight'
                      keyboardType='decimal-pad'
                      style={styles.input}
                      value={values.weight}
                      onChangeText={handleChange('weight')}
                      placeholderTextColor={COLORS.blackColor}
                    />
                  </View>

                  <LinearGradient style={styles.in4Btn} colors={[COLORS.firstSecondaryColor, COLORS.secondSecondaryColor]} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}>
                    <Text style={styles.in4}>KG</Text>
                  </LinearGradient>
                </View>

                {errors.weight && touched.weight ? <Text style={styles.errorMsg}>{errors.weight}</Text> : null}


                <View style={[styles.twoFinalLabels, {marginBottom: errors.height && touched.height ? 5 : 15}]}>
                  <View style={[styles.label, { flex: 1 }]}>
                    <Image source={heightIcon} style={[styles.icon, { marginRight: 15 }]} />

                    <TextInput placeholder='Your Height'
                      keyboardType='decimal-pad'
                      style={styles.input}
                      value={values.height}
                      onChangeText={handleChange('height')}
                      placeholderTextColor={COLORS.blackColor}
                    />
                  </View>

                  <LinearGradient style={styles.in4Btn} colors={[COLORS.firstSecondaryColor, COLORS.secondSecondaryColor]} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}>
                    <Text style={styles.in4}>CM</Text>
                  </LinearGradient>
                </View>
              </View>

              {errors.height && touched.height ? <Text style={styles.errorMsg}>{errors.height}</Text> : null}

              <TouchableOpacity style={styles.nextBtnContainer} onPress={() => handleSubmit()}>
                <LinearGradient colors={[COLORS.firstBrandColor, COLORS.secondBrandColor]} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} style={styles.nextBtn}>
                  <View style={styles.nextContainer}>
                    <Text style={styles.nextBtnText}>Next</Text>

                    <Entypo name='chevron-thin-right' size={16} color='#fff' />
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </View>
  )
}

export default CompleteProfile
