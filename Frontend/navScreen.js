import {  Image, SafeAreaView, ImageBackground, StyleSheet, Text,  TouchableOpacity, Linking, View , Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import profile from './assets/profile.png'

function NavScreen({ navigation }) {

    return (
      <View style={styles.container}>
        
  
        {/*<Text style = {{ color: '#0047AB', fontSize: 45, fontWeight: 'bold', marginTop: 10}}> SafeWalk </Text> */}
        
        <Text style = {{ color: '#FFFFFF', fontSize: 25, fontWeight: 'bold', marginTop:100, marginLeft: 106}}> John Doe </Text>
        <Text style = {{ color: '#F7F7F7', fontSize: 15, fontWeight: 'normal', marginTop: 5, marginLeft: 109}}> View profile </Text>

        <View style={styles.button2}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <AntDesign name="closecircleo" size={38} color="white" />
            </TouchableOpacity>
        </View>

        <Image source={profile} style={styles.image}></Image>

  
      {/* presing login button directs you to the home screen */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.button1}>
                <AntDesign name="appstore-o" size={30} color="white" />
            </View> 
            <Text style = {styles.text1}>Home</Text>

        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
            <View style={styles.button3}>
                <AntDesign name="logout" size={30} color="red" />
            </View> 
            <Text style = {styles.text2}>Log Out</Text>
 
        </TouchableOpacity>
  
  
      </View>
  
  
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#002145'
    },
    image: 
    {
      flex: 1,
      resizeMode: 'contain',
      height: '15%',
      width:'15%',
      marginLeft: 15,
      marginTop:-670
        
    },

    text1: 
    {
      color: '#FFFFFF', 
      fontSize: 20, 
      fontWeight: 'bold', 
      marginTop: -30,
      marginLeft: 90
    },
    text2: 
    {
      color: '#FFFFFF', 
      fontSize: 20, 
      fontWeight: 'bold', 
      top: -448,
      marginLeft: 90
    },
    button1:
    {
        marginTop:-505,
        marginLeft:30  
    },
    button2:
    {
      marginTop:-45,
      marginLeft:360 
    },
    button3:
    {
      bottom:420,
      marginLeft:30 
    }
  });
  
  export default NavScreen;