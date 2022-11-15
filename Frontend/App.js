import { StatusBar } from 'expo-status-bar';
import {  Image, SafeAreaView, ImageBackground, StyleSheet, Text,  TouchableOpacity, Linking, View , Button, Platform} from 'react-native';
import lgo from './assets/lg.png'
import home from './assets/home.png'

// For location in Expo app
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import * as TaskManager from "expo-task-manager"
import { LocationSubscriber } from 'expo-location/build/LocationSubscribers';

const LOCATION_TASK_NAME = "GET_USER_LOCATION"
let foregroundSubscription = null

// Background task for location tracking
TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error}) => {
  if (error) {
    console.error(error)
    return
  }

  if (data) {
    const {locations} = data
    const location = locations[0]

    if (location) {
      console.log("Location in background", location.coords)
    }
  }
})


export default function App() {
  const [position, setPosition] = useState(null);
  
  // Request foreground and background permissions
  useEffect(() => {
    const requestPermissions = async () => {
      const foreground = await Location.requestForegroundPermissionsAsync()
      if (foreground.granted) await Location.requestBackgroundPermissionsAsync()
    }
    requestPermissions()
  }, [])

  // Foreground location tracking method
  const startForegroundUpdate = async () => {
    // Check for foreground permissions
    const { granted } = await Location.getForegroundPermissionsAsync()

    if (!granted) {
      console.log("Foreground location tracking was denied. Handle this case accordingly.")
      return
    }

    // Ensure foreground location tracking is not running already
    foregroundSubscription?.remove()

    // Start watching for the position in real-time, with best accuracy
    foregroundSubscription = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.BestForNavigation,
      },
      location => {
        setPosition(location.coords)
      }
    )
  }

  // Function to stop foreground location tracking
  const stopForegroundUpdate = () => {
    foregroundSubscription?.remove()
    setPosition(null)
  }

  // Background location tracking
  const startBackgroundUpdate = async() => {
    // Check if permissions have been granted
    const { granted } = await Location.getBackgroundPermissionsAsync()

    if (!granted) {
      console.log("Background location tracking was denied. Handle this case accordingly.")
      return
    }

    // Ensure background task has been defined
    const isBackgroundTaskDefined = await TaskManager.isTaskDefined(LOCATION_TASK_NAME)

    if (!isBackgroundTaskDefined) {
      console.log("Background location task is not defined.")
      return
    }

    // Ensure background tracking is not already running
    const backgroundHasStarted = await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME)

    if (backgroundHasStarted) {
      console.log("Background tracking already started.")
      return
    }

    // Start watching background location in real time
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.BestForNavigation,
      showsBackgroundLocationIndicator: true,
      foregroundService: {
        notificationTitle: "Location",
        notificationBody: "Location tracking in background",
        notificationColor: "#fff",
      },
    })
  }

  // Method to stop location tracking in background
  const stopbackgroundUpdate = async () => {
    const backgroundHasStarted = await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME)

    if (backgroundHasStarted) {
      await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME)
      console.log("Background location tracking stopped.")
    }
  }
  
  return (
    startForegroundUpdate(),
    
    <View style={styles.container}>
      
      <ImageBackground source={home} style={styles.image}>

      <Text style = {{ color: '#0047AB', fontSize: 45, fontWeight: 'bold', marginTop: 10}}> SafeWalk </Text>
      <Image source={lgo} style={styles.image1}></Image>
      <Text style = {{ color: '#0047AB', fontSize: 20, fontWeight: 'bold',marginTop:350}}> Safety, Security and Peace of Mind </Text>
      <Text style = {{ color: '#000', fontSize: 15, fontWeight: 'normal', marginTop: 20}}> If you feel unsafe walking alone on </Text>
      <Text style = {{ color: '#000', fontSize: 15, fontWeight: 'normal', marginTop: 3}}> campus after dark, Safewalk can </Text>
      <Text style = {{ color: '#000', fontSize: 15, fontWeight: 'normal', marginTop: 3}}> acoompany you to your destination </Text>
      <Text style = {{ color: '#000', fontSize: 15, fontWeight: 'normal', marginTop: 5}}> {[position?.longitude,";", position?.latitude]} </Text>

      <View style={{ flexDirection: "row" }}>

      <TouchableOpacity>
        <View style = {styles.button1}>
          <Text style = {styles.text1}>LOG IN</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style = {styles.button2}>
          <Text style = {styles.text2}>REGISTER</Text>
        </View>
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
  image1: 
  {
    flex: 1,
    resizeMode: 'contain',
    alignItems: 'center',
    position: 'absolute',
    top: 300

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
    color: '#FFFFFF', 
    fontSize: 20, 
    fontWeight: 'bold', 
    alignItems: 'center'
  },
  button1:
  {
    position:'absolute',
    bottom:-140,
    left:-187,
    backgroundColor: '#FFFFFF',
    borderColor: '#002145',
    borderRadius:'10',
    borderWidth:'2',
    padding: 16,
    paddingHorizontal:55,
    alignItems: 'center'

  },
  button2:
  {
    position:'absolute',
    bottom:-140,
    right:-189,
    backgroundColor: '#002145',
    borderColor: '#002145',
    borderRadius:'10',
    borderWidth:'2',
    padding: 16,
    paddingHorizontal:45,
    alignItems: 'center'

  }
});
