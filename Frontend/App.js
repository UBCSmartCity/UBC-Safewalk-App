import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './login.js';
import HomeScreen from './home.js';
import { Button, Menu, Divider, Provider,List } from 'react-native-paper';
import { View } from 'react-native';
import navScreen from './navScreen.js';



const Stack = createNativeStackNavigator();



//const navigation = useNavigation();
const MyComponent = () => {
  
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name="NavScreen" 
          component={navScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyComponent;