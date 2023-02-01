import { StatusBar } from 'expo-status-bar';
import {  Image, SafeAreaView, ImageBackground, StyleSheet, Text,  TouchableOpacity, Linking, View , Button} from 'react-native';
import lgo from './assets/lg.png'
import home from './assets/home.png'
import StudentLogin from './studentlogin';



function LoginScreen({ navigation }) {

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />

      <ImageBackground source={home} style={styles.image}>

      <Text style = {{ color: '#002145', fontSize: 45, fontWeight: 'bold', marginTop: -150}}> SafeWalk </Text>
      <Image source={lgo} style={styles.image1}></Image>
      <Text style = {{ color: '#0047AB', fontSize: 20, fontWeight: 'bold',marginTop:350}}> Safety, Security and Peace of Mind </Text>

      <Text style = {{ color: '#000', fontSize: 18, fontWeight: 'normal', marginTop: 20}}> If you feel unsafe walking alone on </Text>
      <Text style = {{ color: '#000', fontSize: 18, fontWeight: 'normal', marginTop: 3}}> campus after dark, Safewalk can </Text>
      <Text style = {{ color: '#000', fontSize: 18, fontWeight: 'normal', marginTop: 3}}> accompany you to your destination </Text>

      <View style={{ flexDirection: "row" }}>

    {/* presing login button directs you to the home screen */}
      <TouchableOpacity onPress={() => navigation.navigate('Student')}> 
        <View style = {styles.button1}>
          <Text style = {styles.text1}>USERS</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Employee')}>
        <View style = {styles.button2}>
          <Text style = {styles.text2}>Employee Login</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('Supervisor')}>
    <Text style = {{ color: '#0047AB', fontSize: 15, fontWeight: 'bold',marginTop:20}}> Employee Login </Text>
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
    height: '50%',
    width:'50%',
    position: 'absolute',
    top: 120

  },
  text1: 
  {
    color: '#FFFFFF', 
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

    // position:'absolute',
    // bottom:-80,
    left:-10,
    marginTop: 10,
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

    // position:'absolute',
    // bottom:-80,
    right:-10,
    marginTop: 10,
    borderColor: '#002145',
    padding: 16,
    paddingHorizontal:45,
    alignItems: 'center'

  }
});

export default LoginScreen;