import * as ImagePicker from 'expo-image-picker'
import React, {useState} from "react"
import styles from './Profile.style'
import { Pressable, View, Text, Image } from "react-native"
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImage } from '../../featuers/auth/authSlice'
import { usePostProfileImageMutation } from '../../services/shopApi'


const Profile = () => {
  const image = useSelector(state => state.auth.imageCamera)
  const { localId } = useSelector(state => state.auth)
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation()
  const dispatch = useDispatch()

  const verifyCameraPermisions = async () => {
    const {granted} = await ImagePicker.requestCameraPermissionsAsync()
    if(!granted) {
      return false
    }
    return true
  }
  
  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermisions()

    if (isCameraOk){
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      })
      if (!result.canceled) {
        dispatch(setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`))
      }
    }
  }


  const confirmImage = () => {
    triggerSaveProfileImage({image, localId})
  }


return (
  <View style={styles.container}>
    {image ? (  
    <Image
      source={{
        uri: image
      }}
      style={styles.image}
      resizeMode="cover"
      />
      ) : ( 
     <Image
      source={{
        uri: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png'
      }}
      style={styles.image}
      resizeMode="cover"
      />
    )}
    <Pressable style={styles.buttonCamara} onPress={pickImage}>
      <Text style={styles.textoPerfil}>Tomate tu foto de perfil</Text>
    </Pressable>
    <Pressable style={styles.buttonCamara} onPress={confirmImage}>
      <Text style={styles.textoPerfil}>Confirmar Imagen</Text>
    </Pressable>
  </View>
)
}

export default Profile