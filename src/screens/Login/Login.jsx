import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './login.style'
import {useLoginMutation} from '../../services/authApi'
import { useDispatch } from 'react-redux'
import {setUser} from '../../featuers/auth/authSlice'

const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [triggerLogin, result] = useLoginMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    console.log(email, password)
    triggerLogin({
      email,
      password,
    })
    console.log(result)
    if (result.isSuccess) {
      dispatch(setUser(result))
    }
  }


  return (
    <View style={styles.container}>
        <View style={styles.loginContainer}>
            <Text>Comencemos! Ingresa con tu cuenta</Text>
            <TextInput style={styles.inputEmail} value={email} onChangeText={setEmail} />
            <TextInput style={styles.inputEmail} value={password} onChangeText={setPassword} />
            <Pressable style={styles.loginButton} onPress={onSubmit}>
                <Text style={{color:'white'}}>Ingresar</Text>
            </Pressable>
            <Text>No tienes una cuenta?</Text>
            <Pressable style={styles.loginButton} onPress={()=> navigation.navigate('Signup')}>
                <Text style={{color:'white'}}>Registrate!</Text>
            </Pressable>
        </View> 
    </View>
  )
}

export default Login