import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './Signup.style'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../featuers/auth/authSlice'

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [triggerSignup, result] = useSignUpMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    console.log(email, password, confirmPass)
    triggerSignup({
      email,
      password,
    })
    console.log(result)
    if(result.isSuccess) {
      dispatch(setUser(result))
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.loginContainer}>
            <Text>Comencemos, crea tu cuenta para ingresar a Asspeto</Text>
            <TextInput 
            style={styles.inputEmail} 
            value={email} 
            onChangeText={setEmail}
             />
            <TextInput 
            style={styles.inputEmail} 
            value={password} 
            onChangeText={setPassword}
             />
            <TextInput 
            style={styles.inputEmail}
            value={confirmPass} 
            onChangeText={setConfirmPass} 
            />
            <Pressable style={styles.loginButton} onPress={onSubmit}>
                <Text style={{color:'white'}}>Vamos! Ingresemos</Text>
            </Pressable>
            <Text>Ya tienes una cuenta?</Text>
            <Pressable style={styles.loginButton} onPress={()=> navigation.navigate('Login')}>
                <Text style={{color:'white'}}>Ingresa por aqui!</Text>
            </Pressable>
        </View> 
    </View>
  )
}

export default Signup