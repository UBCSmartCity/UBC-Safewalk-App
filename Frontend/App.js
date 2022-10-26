import { StatusBar } from 'expo-status-bar';
import {  Image, StyleSheet, Text,  TouchableOpacity, Linking, View , Button} from 'react-native';
import lgo from './assets/favicon.png'

// TO DO:
// Change the logo in between in place of translink logo 
// Add background image 
// Do styling for bottons / text / background image as in figma 


export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {{ color: '#0047AB', fontSize: 35, fontWeight: 'bold', marginBottom: 60}}> SafeWalk </Text>
      
      
      <Image source = {{uri: 'data:image/png;base64,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'}} style = {{width:210, height:90}}/>
      <StatusBar style="auto" />

      <Text style = {{ color: '#0047AB', fontSize: 20, fontWeight: 'bold', marginTop: 90}}> Safety, Security and Peace of Mind </Text>
      <Text style = {{ color: '#000', fontSize: 15, fontWeight: 'normal', marginTop: 20}}> If you feel unsafe walking alone on </Text>
      <Text style = {{ color: '#000', fontSize: 15, fontWeight: 'normal', marginTop: 3}}> campus after dark, Safewalk can </Text>
      <Text style = {{ color: '#000', fontSize: 15, fontWeight: 'normal', marginTop: 3}}> acoompany you to your destination </Text>

      <View style={{ flexDirection: "row" }}>

    <View style={{ backgroundColor: '#fff' , marginTop: 20 , borderRadius: 20, padding: 10}}>
        <Button title={"LOG IN"}/>
    </View>
    <View style={{ backgroundColor: '#fff' , marginTop: 20 , marginLeft: 10, borderRadius: 20, padding: 10}}>
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
