import { StatusBar } from 'expo-status-bar';
import {  Image, SafeAreaView, ImageBackground, StyleSheet, Text,  TouchableOpacity, Linking, View , Button} from 'react-native';
import lgo from './assets/lg.png'
import home from './assets/home.png'
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';

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

      <Text style = {{ color: '#002145', fontSize: 45, fontWeight: 'bold', marginTop: -550}}> SafeWalk </Text>
      <Text style = {{ color: '#030919', fontSize: 20, fontWeight: 'bold',marginTop:100, marginLeft: -150}}> Personal Information </Text>
      <Text style = {{ color: '#555B6A', fontSize: 18, fontWeight: 'normal', marginTop: 10, marginLeft: -50}}> Please provide us with your personal </Text>
      <Text style = {{ color: '#555B6A', fontSize: 18, fontWeight: 'normal', marginTop: 3, marginLeft: -137}}> details to know you better </Text>

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
    height: '100%',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text1: 
  {
    color: '#002145', 
    fontSize: 20, 
    fontWeight: 'bold', 
    alignItems: 'center'
  },
  text2: 
  {
    color: '#1D1E21', 
    fontSize: 15, 
    fontWeight: 'italics', 
    alignItems: 'center'
  },
  button1:
  {
    position:'absolute',
    bottom:-280,
    left:-130,
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
    width: 350,
    position: 'absolute',
    top: 300,
    height: 50,
    padding: 5,
    borderWidth: 1,
    borderColor: '#C9CCD3',
    borderRadius:'10',
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
  input1: 
  {
    width: 350,
    height: 50,
    position: 'absolute',
    top: 390,
    padding: 5,
    borderWidth: 1,
    borderRadius:'10',
    backgroundColor: '#FFFFFF',
    borderColor: '#C9CCD3',
  }
});

export default StudentLogin;