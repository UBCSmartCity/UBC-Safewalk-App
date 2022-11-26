// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './login.js';
// import HomeScreen from './home.js';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen 
//           name="Home" 
//           component={HomeScreen} 
//         />
//         <Stack.Screen 
//           name="Login" 
//           component={LoginScreen} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './login.js';
import HomeScreen from './home.js';
import { Button, Menu, Divider, Provider,List } from 'react-native-paper';
import { View } from 'react-native';


const Stack = createNativeStackNavigator();



//const navigation = useNavigation();
const MyComponent = () => {
  
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View style={{flex:1,marginTop:30}}>

      <Menu
        visible={visible}
        onDismiss={closeMenu}
        style={{width:'100%'}}
        anchor={<Button onPress={openMenu} mode="contained">Show menu</Button>}>
        <Menu.Item onPress={() => {closeMenu()}} title="Item 1" />
        <Menu.Item onPress={() => {GoToButton}} title="Login" />
        <Menu.Item onPress={() => {navigation.navigate("Home")}} title="Home" />
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