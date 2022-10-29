import { StatusBar } from 'expo-status-bar';
import {  Image, StyleSheet, Text,  TouchableOpacity, Linking, View , Button} from 'react-native';
import lgo from './assets/favicon.png'
import { useFonts } from 'expo-font';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Mulish-Bold': require('./assets/fonts/Mulish-Bold.ttf'),
    'Mulish-Regular': require('./assets/fonts/Mulish-Regular.ttf'),
    'Mulish-ExtraLight': require('./assets/fonts/Mulish-ExtraLight.ttf'),
  });

  return (
    <View style={styles.container}>
      <Text style = {{ color: '#0047AB', fontFamily: 'Mulish-Bold', fontSize: 35, fontWeight: 'bold', marginBottom: 90}}> SafeWalk </Text>
      
      
      <Image source = {{uri: '\assets\safewalk_icon.png'}} style = {{width:90, height:90}}/>
      <StatusBar style="auto" />

      <Text style = {{ color: '#0047AB', fontFamily: 'Mulish-Bold', fontSize: 20, fontWeight: 'bold', marginTop: 90}}> Safety, Security and Peace of Mind </Text>
      <Text style = {{ color: '#000', fontFamily: 'Mulish-Regular', fontSize: 15, fontWeight: 'normal', marginTop: 20}}> If you feel unsafe walking alone on </Text>
      <Text style = {{ color: '#000', fontFamily: 'Mulish-Regular', fontSize: 15, fontWeight: 'normal', marginTop: 3}}> campus after dark, Safewalk can </Text>
      <Text style = {{ color: '#000', fontFamily: 'Mulish-Regular', fontSize: 15, fontWeight: 'normal', marginTop: 3}}> acoompany you to your destination </Text>
    
      <View style={{ flexDirection: "row" }}>

    <View style={{ backgroundColor: '#fff' , fontFamily: 'Mulish-Bold', marginTop: 20 , borderRadius: 20, padding: 10}}>
        <Button title={"LOG IN"}/>
    </View>
    <View style={{ backgroundColor: '#fff' , fontFamily: 'Mulish-Bold', marginTop: 20 , marginLeft: 10, borderRadius: 20, padding: 10}}>
        <Button  title={"REGISTER"}/>
    </View>
    </View>
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
