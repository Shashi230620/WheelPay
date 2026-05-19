import React from "react";
import { TouchableOpacity,View,Text ,StyleSheet} from "react-native";
import ButtonProps from "./Button";

const Button=({onPress,title}:ButtonProps)=>{
    return(
        <View style={style.getStartedButton}>
            
            <Text style={style.getStartedText}>{title}</Text>
            
        </View>
    )
}

const style=StyleSheet.create({
getStartedButton: {
    backgroundColor: "#4F33FB", // Specific purple hue from UI
    width: "80%",
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  getStartedText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

})
export default Button