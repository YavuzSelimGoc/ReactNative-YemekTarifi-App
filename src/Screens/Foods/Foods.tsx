import { View, Text, SafeAreaView, FlatList, Linking } from 'react-native'
import React from 'react'
import Styles from './Foods.Style'
import useFetch from '../../Hooks/useFetch'
import FoodCard from '../../Components/FoodCard'
import Loading from '../../Components/Loading'
import Error from '../../Components/Error'

const Foods = ({route}) => {
  const {category}=route.params
  const {loading,data,error} = useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+category)
  const handleFoodSelect=(url)=>{
    Linking.openURL('https://www.youtube.com/');
  }
  const renderFood = ({item}) => <FoodCard food={item} onSelect={() => handleFoodSelect(item.strCategory)}  />
  if(loading)
  {
    return <Loading/>
  }
  if(error){
   return <Error/>
  }
return (
  <SafeAreaView style={Styles.container}>
    { <FlatList
    data={data.meals}
    renderItem={renderFood}
    /> }
  </SafeAreaView>
)
}

export default Foods