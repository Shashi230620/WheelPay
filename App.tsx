// import React, { useState } from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import {createStaticNavigation} from '@react-navigation/native';
// import Wallet from "app-wallet/Screens/Wallets"
// import Button from "app-Auth/Components/Buttons";
// import Login from "app-Auth/Screens/Login";
// import Registration from "app-Auth/Screens/Registration";


// export type RootStackParamList={
//   Wallet:undefined,
//   Button:undefined
// }
// const stack=createNativeStackNavigator<RootStackParamList>()
// const App=()=>{
//    return(
//     <>
  
//     </>
//   )

// }

 
// export default App




import React from "react";
import SplashScreen from "app-Auth/Screens/SplashScreen";
import LoginScreen from "app-Auth/Screens/Login";


const App=()=>{
  return(
    <>
    <LoginScreen />
    </>
  )
}
export default App