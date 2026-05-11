import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect,useState } from 'react';
import LoginScreen from "app-Auth/Screens/Login"
import SplashScreen from 'app-Auth/Screens/SplashScreen';
import OtpScreen from 'app-Auth/Screens/OtpScreen';
import WalletScreen from 'app-wallet/Screens/Wallets';
import storage from "app-Common/Storage/Storage";
const Stack = createNativeStackNavigator();

function AppNavigation() {
    const [Session,setSession]=useState<string | undefined>('')
    useEffect(()=>{
      setSession(storage.getString('session_Token'))
      console.log(storage.getString('session_Token'))
    },[])
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='SplashScreen'
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

export default AppNavigation;