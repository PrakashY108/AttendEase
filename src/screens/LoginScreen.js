import React, { useState } from 'react'
import { Alert, Button, Dimensions, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
const logo = require("../assets/Applogo.png")
const github = require("../assets/github.png")
const linkedin = require("../assets/linkedin.png")


// contact me :)
// instagram: must_ait6
// email : mustapha.aitigunaoun@gmail.com

export default function LoginScreen() {
  const [click, setClick] = useState(false);
  const { username, setUsername } = useState("");
  const { password, setPassword } = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.image} resizeMode='contain' />
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' value={username} onChangeText={setUsername} autoCorrect={false}
          autoCapitalize='none' />
        <TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
          autoCapitalize='none' />
      </View>
      <View style={styles.rememberView}>
        <View style={styles.forgetview}>
          <Pressable onPress={() => Alert.alert("Forget Password!")}>
            <Text style={styles.forgetText}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={() => Alert.alert("Login Successfully!")}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <Text style={styles.optionsText}>OR LOGIN WITH</Text>
      </View>

      <View style={styles.mediaIcons}>
       <TouchableOpacity onPress={() => Alert.alert("Github")}><Image source={github} style={styles.icons} /></TouchableOpacity>
       <TouchableOpacity onPress={() => Alert.alert("Linkedin")}><Image source={linkedin} style={styles.icons} /></TouchableOpacity>
        
      </View>
      <View style={styles.footerview}>
      <Text style={styles.footerText}>Don't Have Account?</Text>
      <TouchableOpacity onPress={() => Alert.alert("Sign Successfully!")}><Text style={styles.signup}> Sign Up</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    height:Dimensions.get("screen").height,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor:"white"
  },
  image: {
    height: 170,
    width: 180,
    borderRadius:90
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: "blue"
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#7695FF",
    borderWidth: 1,
    borderRadius: 7
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8
  },
  forgetview: {
    margin: 7,
  },
  forgetText: {
    fontSize: 12,
    color: "red",
    fontWeight: "650"
  },
  button: {
    backgroundColor: "#7695FF",
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold"
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 40
  },
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "black",
    fontSize: 13,
    marginBottom: 6
  },
  mediaIcons: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 23
  },
  icons: {
    width: 35,
    height: 35,
  },
  footerText: {
    textAlign: "center",
    color: "black",
  },
  signup: {
    color: "red",
    fontSize: 14,
     fontWeight: "650"
  },
  footerview:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  }
})