import { StatusBar, View, FlatList } from 'react-native'
import React from 'react'
import { CategoryItem } from './components'
import {Header} from '../../components'
import styles from './Home.style'
import { useGetCategoriesQuery } from '../../services/shopApi'


const  Home = ({navigation}) => {
 const { data, isLoading } = useGetCategoriesQuery()
  return (
    <View style={styles.container}>
    <Header title={"Categorias"} />
     <StatusBar barStyle={'light-content'} />
     {!isLoading && (
      <FlatList
      data={data}
      keyExtractor={category => category.title}
      renderItem={({item}) => (
      <CategoryItem 
      category={item.title} 
      navigation={navigation}
      />)}
      />
     )}
    </View>
  )
}

export default Home

