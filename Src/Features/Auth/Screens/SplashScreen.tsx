import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, SafeAreaView } from "react-native";
import Button from "app-Auth/Components/Buttons";
const { width, height } = Dimensions.get("window");

const SplashScreen = () => {
 const [ShowSplashScreens,setShowSplashScreens]=useState(false)
  const [RotationImages] = useState([
    {
      id: 1,
      img: require("app-Auth/assets/1.png"),
      title: "Discover a",
      titleAccent: "Smarter Way",
      subtitle: "One app for all your payments,\nrides and more.",
    },
    { id: 2, img: require("app-Auth/assets/2.png"), title: "Secure", titleAccent: "Every Payment", subtitle: "Advance security to keep your money safe." },
    { id: 3, img: require("app-Auth/assets/3.png"), title: "Book ride", titleAccent: "With Ease", subtitle: "Quick, reliable and affordable ride anytime." },
    { id: 4, img: require("app-Auth/assets/4.png"), title: "Track and Manage", titleAccent: " Everything", subtitle: "Track expenses, manage budgets and grow smarter." },
  ]);
 useEffect(()=>{
  const timer=setTimeout(() => {
    setShowSplashScreens(true)
  }, 3000);
  return()=>clearTimeout(timer)
 })
  const SecondSplashScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {RotationImages.map((value) => (
            <View key={value.id} style={styles.slide}>
              {/* Header Text Section */}
              <View style={styles.textContainer}>
                <Text style={styles.title}>
                  {value.title}
                  {"\n"}
                  <Text style={styles.titleAccent}>{value.titleAccent}</Text>
                </Text>
                <Text style={styles.subtitle}>{value.subtitle}</Text>
              </View>

              {/* Main Visual Section */}
              <View style={styles.imageWrapper}>
                <Image
                  source={value.img}
                  style={styles.mainImage}
                  resizeMode="contain"
                />
              </View>

              {/* Action Buttons Section */}
           
            </View>
          ))}
        </ScrollView>
           <View style={styles.footer}>
                  <Button title="Get Started"/>
                <TouchableOpacity style={styles.skipButton}>
                  <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
              </View>
      </SafeAreaView>
    );
  }

  const FirstSplashScreen=()=>{
    return(
      <View style={styles.container}>
         <View style={styles.imageWrapper}>
        <Image source={require("app-Auth/assets/Splashscreenbg_1.png") } resizeMode="cover" style={styles.FIrstImage}/>
        </View>
      </View>
    )
  }

  return (
    <>
     {
      ShowSplashScreens===false?FirstSplashScreen():SecondSplashScreen()
     }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
  },
  FIrstImage:{
width: '100%', 
height: '100%'
  },
  slide: {
    width: width,
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-between', // Ensures content is spread from top to bottom
    paddingVertical: 40,
  },
  textContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "800",
    color: "#FFFFFF",
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  titleAccent: {
    color: "#6347EB", // Matching the purple from the image
  },
  subtitle: {
    fontSize: 16,
    color: "#A0A0A0",
    marginTop: 10,
    lineHeight: 22,
  },
  imageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainImage: {
    width: width * 0.9,
    height: height * 0.4,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
    skipButton: {
    paddingVertical: 10,
  },
  skipText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
    opacity: 0.8,
  },
});

export default SplashScreen;