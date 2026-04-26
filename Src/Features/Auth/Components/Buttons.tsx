import React from "react";
import { TouchableOpacity,View,Text ,StyleSheet} from "react-native";
import ButtonProps from "./Button";

const Button=({onPress,title}:ButtonProps)=>{
    return(
        <View style={style.Button}>
            <TouchableOpacity onPress={onPress}>
                <Text style={style.Text}>{title}</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const style=StyleSheet.create({
 Button:{
    width:"30%",
    height:"30%",
    backgroundColor:"#6D5DF6"
 },
 Text:{
    color:"white"
 }
})
export default Button