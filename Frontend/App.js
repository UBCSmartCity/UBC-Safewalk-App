import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './login.js';
import HomeScreen from './home.js';
import { Button, Menu, Divider, Provider, List } from 'react-native-paper';
import { View } from 'react-native';
import navScreen from './navScreen.js';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavScreen from './navScreen.js';
import StudentLogin from './studentlogin.js';
import EmployeeLogin from './employeelogin.js';
import Supervisor from './supervisor.js';
import supAssign from './supAssign.js';
import AcceptScreen1 from './accept1.js';
import AcceptScreen2 from './accept2.js'
import verification from './verification.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={require('./assets/hamburger-icon.png')} style={styles.hamburgerIcon} />
      </TouchableOpacity>
    </View>
  );
};


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Login' useLegacyImplementation={true}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Settings" component={NavScreen} />
      <Drawer.Screen name="Student" component={StudentLogin} />
      <Drawer.Screen name="Employee" component={EmployeeLogin} />
      <Drawer.Screen name="Supervisor" component={Supervisor} />
      <Drawer.Screen name="supAssign" component={supAssign} />
      <Drawer.Screen name="acceptScreen" component={AcceptScreen1} />
      <Drawer.Screen name="acceptScreenTwo" component={AcceptScreen2} />
      <Drawer.Screen name="verification" component={verification} />
    </Drawer.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>

        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hamburgerIcon: {
    width: 30,
    height: 30,
    margin: 10,
  },
});

export default App;