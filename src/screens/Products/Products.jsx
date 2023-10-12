import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Products.style'
import { Header, SearchInput } from '../../components'
import { colors } from '../../constants/colors'
import { Entypo } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../../services/shopApi'

const Products = ({navigation}) => {
    const category = useSelector(state => state.shop.categorySelected)
    const [keyword, setKeyword] = useState ('')
    const {data, isLoading} = useGetProductsByCategoryQuery(category)

    // useEffect(() =>{
    //     if (data) { 
    //     const productsFiltered = data.filter(
    //         product => product.title.includes(keyword)
    //     )
        
    //     } 
    // }, [keyword])


  return (
    <View style={styles.container}>
        <Header title={category}/>
        <SearchInput onSearch={setKeyword} />
        <View style={styles.listContainer}>
            {!isLoading && (
               <FlatList 
            data={Object.values(data)}
            renderItem={({item}) => (
            <TouchableOpacity  onPress={()=> navigation.navigate('Details', {product: item})} >
                
                <Text style={styles.titulo}>"{item.title}"   <Entypo name="book" size={24} color={colors.tertiary} /> </Text>
            </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            /> 
            )}  
        </View>
    </View>
  )
}

export default Products