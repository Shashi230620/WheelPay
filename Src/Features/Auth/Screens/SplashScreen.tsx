import React, { useEffect, useState } from "react";
import {View,Text,Image,StyleSheet} from "react-native"
import SplashScreenImage from "app-Auth/assets/Splashscreenbg_1.png";
import SplashSCreenImage2 from "app-Auth/assets/Splashscreenbg_2.png"
const SplashScreen=()=>{
const [RenderImage,setRenderImage]=useState(false)
useEffect(()=>{
    const timer=setTimeout(() => {
    setRenderImage(true)
    console.log(RenderImage)
    }, 2000);
    return ()=>clearTimeout(timer)
},[])
return(
  <>
 <View style={styles.container}>
        <Image source={RenderImage?SplashSCreenImage2:SplashScreenImage}  resizeMode="cover" style={styles.Image}/>
    </View>

  </>
)

}
const styles=StyleSheet.create({
    container:{
flex:1
    },
    Image:{
        width:"100%", 
        height:"100%" 
    }
})
export default SplashScreen