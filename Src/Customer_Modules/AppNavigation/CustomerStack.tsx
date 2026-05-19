import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect,useState } from 'react';
import LoginScreen from 'app-Shared/Features/Auth/Screens/Login';
import SplashScreen from 'app-Shared/Features/Auth/Screens/SplashScreen';
import OtpScreen from 'app-Shared/Features/Auth/Screens/OtpScreen';
import WalletScreen from 'app-Shared/Features/Wallet/Screens/Wallets';
import Biometric from 'app-Shared/Features/Auth/Services/Biometric/Biometric';
import *as keychain from 'react-native-keychain'
const Stack = createNativeStackNavigator();

const Custome_Stack=()=> {
  const [Session,setSession]=useState<string | null>(null)
   const main_Session=async()=>{
   const Auth_Token=await keychain.getGenericPassword()
   if(Auth_Token){
    setSession('WalletScreen')
    await Biometric()
   }
   else{
    setSession('SplashScreen')
   }
 
   }
   useEffect(()=>{
    main_Session()
   },[])
   if(Session===null){
    return null
   }
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={Session}
        screenOptions={{
          headerShown: false, // Hides the default white header to keep your UI exact
        }}
      >

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="WalletScreen" component={WalletScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Custome_Stack;