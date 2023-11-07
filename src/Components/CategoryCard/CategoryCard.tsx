import { View, SafeAreaView, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Styles from './CategoryCard.Style'

const CategoryCard = ({category,onSelect}) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
     <View style={Styles.container} >
        <Image style={Styles.image} source={{uri:category.strCategoryThumb}}/>
          <Text style={Styles.title}>{category.strCategory} </Text>
    
        </View>
        </TouchableWithoutFeedback>
       
      )
    }

export default CategoryCard