import { View, Text, Pressable, Image } from 'react-native'
import styles from './Cartitem.style'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'

const Cartitem = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image 
        style={styles.image}
        source={{uri: item.images[0]}}
        />
      </View>
      <View>
        <Text style={styles.name}>{item.title}</Text>
      </View>
      <View style={styles.details}>
        <View>
            <Text>{item.quantity}</Text>
            <Text>{item.price}</Text>
        </View>
        <Pressable>
            <Feather name="trash" size={24} color={"black"}/>
        </Pressable>
      </View>
    </View>
  )
}

export default Cartitem