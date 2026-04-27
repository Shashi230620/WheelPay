// import React, { useEffect, useState } from "react";
// import {View,Text,Image,StyleSheet,FlatList,ScrollView} from "react-native"


// const SplashScreen=()=>{
// const [RotationImages]=useState([
//     {id:1,img:require("app-Auth/assets/1.png"),title:"Discover a Smarter Way",subtitle:"One app for all your payments,rides and more."},
//     // {id:2,img:require("app-Auth/assets/2.png"),title:"Secure Every Payment",subtitle:"Advance security to keep your money safe."},
//     // {id:3,img:require("app-Auth/assets/3.png"),title:"Book ride With Ease",subtitle:"Quick , reliable and affortable  ride anytime ."},
//     // {id:4,img:require("app-Auth/assets/4.png"),title:"Track and Manage Everything",subtitle:"Track expenses,manage budgets and grow smarter."},
// ]);
// const renderRotateImages=()=>{
// return(
//     <>{
//         RotationImages.map((value)=>{
//             return(
//                 <ScrollView horizontal >
//             <View key={value.id}>
//                 <View>
//                     <Text>{value.title}</Text>
//                 </View>
//                 <View style={styles.Image}>
//                     <Image source={value.img} />
//                 </View>
//                 <View>
//                   <Text>{value.subtitle}</Text>
//                 </View>
//             </View>
//             </ScrollView>
//             )
         
//         })
//     }
//     </>
// )
// }
// return(
//   <>
//   <View style={styles.container}>
//      {renderRotateImages()}
//   </View>


 

//   </>
// )

// }
// const styles=StyleSheet.create({
//     container:{
// flex:1
//     },
//     Image:{
//         width:10, 
//         height:10 
//     }
// })
// export default SplashScreen























import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const SplashScreen = () => {
  const [RotationImages] = useState([
    {
      id: 1,
      img: require("app-Auth/assets/1.png"),
      title: "Discover a",
      titleAccent: "Smarter Way",
      subtitle: "One app for all your payments,\nrides and more.",
    },
  ]);

  return (
    <View style={styles.container}>
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
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505", // Deep black background
  },
  slide: {
    width: width,
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  textContainer: {
    zIndex: 10,
    marginBottom: 40,
  },
  title: {
    fontSize: 42,
    fontWeight: "800",
    color: "#FFFFFF",
    lineHeight: 50,
    letterSpacing: -0.5,
  },
  titleAccent: {
    color: "#7B61FF", // Vibrant purple from the image
  },
  subtitle: {
    fontSize: 18,
    color: "#A0A0A0",
    marginTop: 15,
    lineHeight: 26,
    fontWeight: "400",
  },
  imageWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20, // Slight pull up to center the composition
  },
  mainImage: {
    width: width * 1.1, // Slightly wider to allow floating elements to breathe
    height: "100%",
  },
});

export default SplashScreen;