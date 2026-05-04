import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
// Import the icon sets
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Button from "app-Auth/Components/Buttons";
import { supabase } from "app-Common/Supabase/SupabaseConnect";
const LoginScreen = () => {
  const [MobileNumber,setMobilenumber]=useState<string>('')

  const SendOtp=async()=>{
    const {data,error}=await supabase.auth.signInWithOtp({
      phone:`+91${MobileNumber}`
    });

    if(error){
      console.log('fail to send otp',error)
      return false
    }
    else{
      console.log('success')
      return true
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome Back! 👋</Text>
          <Text style={styles.subText}>Login to continue</Text>
        </View>

        {/* Input Section */}
        <View style={styles.form}>
          <Text style={styles.label}>Mobile Number</Text>
          <View style={styles.inputContainer}>
            <Icon name="phone-iphone" size={20} color="#555" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter mobile number"
              placeholderTextColor="#555"
              keyboardType="phone-pad"
              value={MobileNumber}
              onChangeText={setMobilenumber}
            />
          </View>

          <View style={{ marginTop: 30,marginLeft:40 ,width:"90%"}}>
            <TouchableOpacity onPress={SendOtp}>
              <Button title="Login" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Divider Section */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.line} />
        </View>

        {/* Social Logins using FontAwesome */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialIconBox}>
            <FontAwesome name="apple" size={28} color="#FFFFFF" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.socialIconBox}>
            <FontAwesome name="google" size={28} color="#EA4335" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.socialIconBox}>
            <FontAwesome name="facebook" size={28} color="#1877F2" />
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05070A",
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: "center",
  },
  header: {
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subText: {
    fontSize: 16,
    color: "#A0A0A0",
    marginTop: 8,
  },
  form: {
    width: "100%",
  },
  label: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0D1117",
    borderWidth: 1,
    borderColor: "#1A1F26",
    borderRadius: 12,
    height: 55,
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#FFF",
    height: "100%",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 40,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#222",
  },
  dividerText: {
    color: "#888",
    paddingHorizontal: 10,
    fontSize: 14,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  socialIconBox: {
    width: 60,
    height: 60,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#1A1F26",
    backgroundColor: "#0D1117",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  footerText: {
    color: "#A0A0A0",
    fontSize: 14,
  },
  signUpText: {
    color: "#7B61FF",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default LoginScreen;