import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './login.js';
import HomeScreen from './home.js';
import { Button, Menu, Divider, Provider,List } from 'react-native-paper';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

const MyComponent = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View style={{flex:1,marginTop:0}}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          style={{width:'100%', marginTop: '20%'}}
          anchor={<Button onPress={openMenu} mode="contained">Show menu</Button>}>
          <List.Item onPress={() => {closeMenu()}} title="close menu" />
          <List.Item onPress={() => navigation.navigate('Login')} title="To login" />
          <List.Item onPress={() => navigation.navigate('Home')} title="To home" />
        </Menu>
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
        </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default MyComponent;