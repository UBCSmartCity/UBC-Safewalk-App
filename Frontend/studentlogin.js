import { StatusBar } from 'expo-status-bar';
import {  Image, SafeAreaView, ImageBackground, StyleSheet, Text,  TouchableOpacity, Linking, View , Button} from 'react-native';
import lgo from './assets/lg.png'
import home from './assets/home.png'
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


// For testing
const API_ngrok = "https://d8e8-206-87-116-76.ngrok.io"

function StudentLogin({ navigation }) {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const handleLogin = async () => {
    try {
      const response = await fetch(API_ngrok+"/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await response.json();
      if (data.message == "Login successful.") {
        // Store authentication token
        console.log('Login successful!');
        navigation.navigate('Home');
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again later.');
    }
  };
  


  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />

      <ImageBackground source={home} style={styles.image}>

      <Text style = {{ color: '#002145', fontSize: hp('5%'), fontWeight: 'bold', marginTop: hp('-60%')}}> SafeWalk </Text>
      <Text style = {{ color: '#030919', fontSize: hp('2%'), fontWeight: 'bold',marginTop:hp('10%'), marginLeft: hp('-18%')}}> Personal Information </Text>
      <Text style = {{ color: '#555B6A', fontSize: hp('2%'), fontWeight: 'normal', marginTop: hp('1%'), marginLeft: hp('-5%')}}> Please provide us with your personal </Text>
      <Text style = {{ color: '#555B6A', fontSize: hp('2%'), fontWeight: 'normal', marginTop: hp('1%'), marginLeft: hp('-14.5%')}}> details to know you better </Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input1}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
 
      <View style={{ flexDirection: "row" }}>

    {/* presing login button directs you to the home screen */}
      <TouchableOpacity onPress={handleLogin}> 
        <View style = {styles.button1}>
          <Text style = {styles.text1}>Login</Text>
        </View>
        {/* <Button title="Login" onPress={handleLogin} /> */}
      </TouchableOpacity>

    </View>

    </ImageBackground>
      
      <StatusBar style="auto" />
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: 
  {
    flex: 1,
    height: hp('100%'),
    width:wp('100%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  text1: 
  {
    color: '#002145', 
    fontSize: hp('2%'), 
    fontWeight: 'bold', 
    alignItems: 'center'
  },
  text2: 
  {
    color: '#1D1E21', 
    fontSize: hp('2%'), 
    fontWeight: 'italics', 
    alignItems: 'center'
  },
  button1:
  {
    position:'absolute',
    bottom:hp('-30%'),
    left:hp('-14%'),
    backgroundColor: '#FFFFFF',
    borderColor: '#002145',
    borderRadius:'5',
    borderWidth:'2',
    padding: 10,
    paddingLeft: 100,
    paddingRight: 100,
    paddingHorizontal:55,
    alignItems: 'center'

  },
  input: 
  {
    width: wp('82%'),
    position: 'absolute',
    top: hp('33%'),
    height: hp('5%'),
    padding: 5,
    borderWidth: 1,
    borderColor: '#C9CCD3',
    borderRadius:'10',
    backgroundColor: '#FFFFFF',
    marginBottom: hp('10%'),
  },
  input1: 
  {
    width: wp('82%'),
    height: hp('5%'),
    position: 'absolute',
    top: hp('42%'),
    padding: 5,
    borderWidth: 1,
    borderRadius:'10',
    backgroundColor: '#FFFFFF',
    borderColor: '#C9CCD3',
  }
});


export default StudentLogin;