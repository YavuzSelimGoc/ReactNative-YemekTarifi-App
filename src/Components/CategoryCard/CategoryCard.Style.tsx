import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
    flexDirection:"row",
    alignItems:"center",
    width: Dimensions.get('screen').width,
     height: 80,
     borderBottomLeftRadius:20,
     borderTopLeftRadius:20,
     margin:15 
    },
    image: { 
        width:100,
        height:80,
        resizeMode:"stretch",
        alignItems:"flex-start",
        margin:5
  },
  title:{
    fontSize:17,
    marginLeft:20,
    fontWeight:"bold",
    textAlign:"center"
  }
})