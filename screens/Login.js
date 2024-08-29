import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
      <Image source={require("../assets/topVector.png")} style={styles.topImage}/>
      </View>
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Hello</Text>
      </View>
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>Sign in to your Account</Text>
      </View>
      <View style={styles.emailAddressContainer}>
    <TextInput style={styles.emailAddressLabel} placeholder='Email Address'/>
      </View>
      <View style={styles.passwordContainer}>
    <TextInput style={styles.passwordLabel} placeholder='Password'/>
      </View>
     <Text style={styles.forgotPasswordLabel}>Forgot Password</Text>
     <View>
     <LinearGradient
    colors={['#4c669f', '#3b5998', '#192f6a']}
    style={styles.button}
  >
    <Text style={styles.buttonText}>Sign in with Facebook</Text>
  </LinearGradient>
     </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white",
  
  },
  topImage:{
    width: "100%",
    height: 120,
  },
  helloContainer:{
   
  },
  helloText:{
    textAlign: "center",
    fontSize: 70,
    fontWeight: "600",
    color: "black",
  },
  signInContainer:{

  },
  signInText:{
    textAlign: "center",
    fontSize: 18,
    color: "red",
  },
  emailAddressContainer:{
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 10,
    marginVertical: 40,
    height: 50,
  },
  emailAddressLabel: {
    flex: 1,
    marginLeft: 15,
  },
  passwordContainer:{
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 10,
    height: 50,
  },
  passwordLabel: {
    flex: 1,
    marginLeft: 15,
  },
  forgotPasswordLabel:{
    color: "#BEBEBE",
    textAlign: "right",
    width: "90%",
    fontSize: 15,
    marginVertical: 15,
  }
});