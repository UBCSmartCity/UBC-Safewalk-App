import {  Image, SafeAreaView, ImageBackground, StyleSheet, Text,  TouchableOpacity, Linking, View , Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import profile from './assets/profile.png'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function NavScreen({ navigation }) {

    return (
      <View style={styles.container}>
        
  
        {/*<Text style = {{ color: '#0047AB', fontSize: 45, fontWeight: 'bold', marginTop: 10}}> SafeWalk </Text> */}
        
        <Text style = {{ color: '#FFFFFF', fontSize: hp('2%'), fontWeight: 'bold', marginTop:hp('11%'), marginLeft: hp('11.3%')}}> John Doe </Text>
        <Text style = {{ color: '#F7F7F7', fontSize: hp('1.5%'), fontWeight: 'normal', marginTop: hp('1%'), marginLeft: hp('11.4%')}}> View profile </Text>

        <View style={styles.button2}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <AntDesign name="closecircleo" size={hp('4%')} color="white" />
            </TouchableOpacity>
        </View>

        <Image source={profile} style={styles.image}></Image>

  
      {/* presing login button directs you to the home screen */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.button1}>
                <AntDesign name="appstore-o" size={hp('4%')} color="white" />
            </View> 
            <Text style = {styles.text1}>Home</Text>

        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
            <View style={styles.button3}>
                <AntDesign name="logout" size={hp('4%')} color="red" />
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
      height: hp('15%'),
      width: wp('15%'),
      marginLeft: hp('2%'),
      marginTop: hp('-72%')
        
    },

    text1: 
    {
      color: '#FFFFFF', 
      fontSize: hp('2%'), 
      fontWeight: 'bold', 
      marginTop: -30,
      marginLeft: hp('9.5%')
    },
    text2: 
    {
      color: '#FFFFFF', 
      fontSize: hp('2%'), 
      fontWeight: 'bold', 
      top: -448,
      marginLeft: hp('9.5%')
    },
    button1:
    {
        marginTop:hp('-55%'),
        marginLeft:hp('3.2%')  
    },
    button2:
    {
      marginTop: hp('-4.5%'),
      marginLeft:hp('38.5%') 
    },
    button3:
    {
      bottom:hp('45%'),
      marginLeft:hp('3.2%') 
    }
  });
  
  export default NavScreen;