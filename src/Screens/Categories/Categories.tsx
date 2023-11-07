import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Styles from './Categories.Style'
import useFetch from '../../Hooks/useFetch'
import CategoryCard from '../../Components/CategoryCard'
import Loading from '../../Components/Loading'
import Error from '../../Components/Error'

const Categories = ({navigation}) => {
  const {loading,data,error} = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php")

  const handleFoodSelect=(category)=>{
    navigation.navigate('Foods',{category})
  }
  const renderCategory = ({item}) => <CategoryCard category={item} onSelect={() => handleFoodSelect(item.strCategory)}  />
  if(loading)
  {
    return <Loading/>
  }
  if(error){
   return <Error/>
  }
return (
  <SafeAreaView style={Styles.container}>
    <FlatList
    data={data.categories}
    renderItem={renderCategory}
    />
  </SafeAreaView>
)
}

export default Categories