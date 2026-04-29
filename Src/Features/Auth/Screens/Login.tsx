import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import  storage  from "app-Common/Storage/Storage";
import Button from "app-Auth/Components/Buttons";
const { width } = Dimensions.get("window");

const LoginScreen = () => {
const [EmailMobile,setEmailMobile]=useState<string>("")
const [Passward,setPassward]=useState<string>("")
const [passwordVisible, setPasswordVisible] = useState(false); 

  const handleLogin=()=>{
    storage.set('EmailMobile', EmailMobile);
  storage.set('Passward', Passward);
  storage.set('Walletbalance',23546)
console.log(storage.getString('EmailMobile'));
console.log(storage.getString('Passward'));
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
          <Text style={styles.label}>Email or Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email or mobile number"
            placeholderTextColor="#555"
            value={EmailMobile}
            onChangeText={setEmailMobile}
          />

          <Text style={[styles.label, { marginTop: 20 }]}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter password"
              placeholderTextColor="#555"
              secureTextEntry={!passwordVisible}
              value={Passward}
               onChangeText={setPassward}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                <Text>eye</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

       <TouchableOpacity onPress={handleLogin}>
        <Button  title="Login"/>
       </TouchableOpacity>
        </View>

        {/* Divider Section */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.line} />
        </View>

        {/* Social Logins */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialIconBox}>
             {/* Replace with <Image> or Icon */}
            <Text style={styles.socialPlaceholder}></Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIconBox}>
            <Text style={[styles.socialPlaceholder, {color: '#EA4335'}]}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIconBox}>
            <Text style={[styles.socialPlaceholder, {color: '#1877F2'}]}>f</Text>
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
    backgroundColor: "#05070A", // Very deep navy/black
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
  input: {
    backgroundColor: "#0D1117",
    borderWidth: 1,
    borderColor: "#1A1F26",
    borderRadius: 12,
    height: 55,
    paddingHorizontal: 15,
    color: "#FFF",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0D1117",
    borderWidth: 1,
    borderColor: "#1A1F26",
    borderRadius: 12,
    height: 55,
    paddingHorizontal: 15,
  },
  passwordInput: {
    flex: 1,
    color: "#FFF",
  },
  forgotButton: {
    alignSelf: "flex-end",
    marginTop: 15,
    marginBottom: 30,
  },
  forgotText: {
    color: "#7B61FF",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#4F33FB", // Or use LinearGradient for the exact look
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
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
  socialPlaceholder: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
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