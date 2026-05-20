import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OtpScreenbg from "app-Shared/Features/Auth/assets/Otp.png"
import storage from 'app-Shared/Services/Storage/Storage';
import * as keychain from "react-native-keychain"
import AuthStore from 'app-Shared/Services/Zustand/AppStores/AuthStore';

const { height, width } = Dimensions.get('window');

const OtpScreen = ({route}) => {
  const navigation=useNavigation<any>()
  const {MobileNumber,Otp}=route.params
  const {otp_Verifiy,response}=AuthStore()
  const [otp, setOtp] = useState(Array(5).fill(""))
  const inputs = useRef<Array<TextInput | null>>([]);
  let newOtp=[...otp];
  const handleChange = (text: string, index: number) => {
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };
 useEffect(()=>{
  if(newOtp.at(-1)){
   const verify_Otp=async()=>{
   const Send_Otp=newOtp.join("")
    await otp_Verifiy({
      'MobileNumber':Number(MobileNumber),
      'Otp':Number(Send_Otp)
    })
     if(response.status===200){
      await keychain.setGenericPassword('AuthToken',response.response[0].AuthToken)
      storage.set('WheelPayId',response.response[0].WheelPayId)
      setOtp(Array(5).fill(""))
      navigation.navigate('WalletScreen')
     }
   }
   verify_Otp()

  };
 },[newOtp])

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      {/* 1. BACKGROUND IMAGE - Fixed and covering the whole screen */}
      <Image 
        source={OtpScreenbg} 
        style={styles.backgroundImage} 
        resizeMode="cover" 
      />

      {/* 2. UI CONTENT - This sits on top of the image */}
      <View style={styles.contentOverlay}>
        <View style={styles.header}>
          <Text style={styles.title}>Verify OTP</Text>
          <Text style={styles.subtitle}>
            Enter the 6-digit code sent to{"\n"}
            <Text style={styles.phoneNumber}>+91 {MobileNumber}</Text>
          </Text>
        </View>

        <View style={styles.otpRow}>
          {otp.map((digit, index) => (
            <View key={index} style={styles.box}>
              <TextInput
                ref={(ref) => (inputs.current[index] = ref)}
                style={styles.inputText}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                value={digit}
                selectionColor="#7B61FF"
                placeholderTextColor="rgba(255,255,255,0.2)"
              />
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.resendText}>
            Resend OTP in <Text style={styles.timer}>00:25</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height,
    top: 0,
    left: 0,
    zIndex: 0, // Behind the UI
  },
  contentOverlay: {
    flex: 1,
    zIndex: 1, // Above the image
    alignItems: 'center',
    paddingTop: height * 0.15, // Moves "Verify OTP" to the upper section
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    lineHeight: 24,
  },
  phoneNumber: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  box: {
    width: 46,
    height: 56,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '500',
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },
  footer: {
    marginTop: 40,
  },
  resendText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 14,
  },
  timer: {
    color: '#7B61FF',
    fontWeight: '600',
  },
});

export default OtpScreen;