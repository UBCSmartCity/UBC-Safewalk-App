import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './login.js';
import HomeScreen from './home.js';
import { Button, Menu, Divider, Provider,List } from 'react-native-paper';
import { View } from 'react-native';
import navScreen from './navScreen.js';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
<Drawer.Navigator useLegacyImplementation={true}>
<Drawer.Screen name="Home" component={HomeScreen} />
<Drawer.Screen name="Login" component={LoginScreen} />
<Drawer.Screen name="Settings" component={navScreen} />
</Drawer.Navigator>
);
};

const App = () => {
return (
  <NavigationContainer>
    <Stack.Navigator>
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

