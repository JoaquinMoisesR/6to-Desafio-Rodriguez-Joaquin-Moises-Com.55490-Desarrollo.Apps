import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import styles from './Cart.style'
import CartItem from './components/Cartitem'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../../services/shopApi'


const Cart = () => {

  const cart = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)
  const [ triggerPost, result ] = usePostOrderMutation()

const renderItem = ({item}) => <CartItem item={item}/>

const confirmCart = () => {
  triggerPost({total, cart, user:"LoggedUser"})
}

  return (
    <View style={styles.container}>
      <View>
        <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        />
      </View>
      <View>
        <Pressable onPress={confirmCart}>
          <Text>Confirmar</Text>
          <View>
            <Text>{`Total US$ ${total}`}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart