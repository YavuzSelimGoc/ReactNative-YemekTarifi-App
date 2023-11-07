import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        height:Dimensions.get('screen').height/4,
        width:Dimensions.get('screen').width/1.2,
        justifyContent:"center",
        margin:37,
        zIndex:1
        
    },
    image:{
        flex:1,
        resizeMode:"stretch",
        borderRadius:20
    },
    title:{
        fontSize:28,
        textAlign:"center",
        color:'white'
    },
    titleContainer:{
        backgroundColor: 'black',
opacity: 0.8,
borderBottomLeftRadius:20,
borderBottomRightRadius:20,
marginTop:-30,
zIndex:1
    }
})