import { View, Text, Image, StatusBar, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import styles from './Details.style'
import { useDispatch } from 'react-redux'
import { addItem } from '../../featuers/cart/cartSlice'

const Details = ({route}) => {

  const {product} = route.params
  const dispatch = useDispatch()


  const handleAddToCart = () => {
    dispatch(addItem({...product, quantity:1}))
  } 



  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Header title={'Detalles'} /> 
      <ScrollView><Image style={styles.image} source={{ uri: product.images[0] }}/>
      <View>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{`US$ ${product.price}`}</Text>
      <Pressable onPress={handleAddToCart}>
        <Text>Agregar al carrito</Text>
      </Pressable>
      </View></ScrollView>
    
    </View>
  )
}

export default Details