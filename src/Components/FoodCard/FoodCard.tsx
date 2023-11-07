import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Styles from './FoodCard.Style'

const FoodCard = ({food,onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
    <View style={Styles.container}>
      <Image  style={Styles.image} source={{uri:food.strMealThumb}} />
      <View style={Styles.titleContainer}>
      <Text style={Styles.title}>{food.strMeal}</Text>
      </View>
      
    </View>
    </TouchableWithoutFeedback>
  )
}

export default FoodCard