import {Image, StyleSheet, Text,  TouchableOpacity, Linking, View , TouchableHighlight} from 'react-native';
import profile from './assets/blank-profile-picture.png'

function Verification({ navigation }) {      
    const onPressMobileNumberClick = (number) => {

        let phoneNumber = '';
        if (Platform.OS === 'android') {
          phoneNumber = `tel:${number}`;
        } else {
          phoneNumber = `telprompt:${number}`;
        }
  
        Linking.openURL(phoneNumber);
     }
     
    return (
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style = {{ color: '#000', fontSize: 15, marginTop: 15,  textAlign: "center" }}>Verification Code:<Text style = {{ fontWeight: 'bold' }}> KWB294</Text></Text>

      <Image source={profile} style={styles.profile}></Image>
      <Text style = {{ color: '#000', fontSize: 15, marginTop: 15,  textAlign: "center" }}>SafeWalker A</Text>

      <View style={styles.greyBubble}> 
        <Text style = {{ fontSize: 15}}>  The assigned SafeWalker is {'\n'} enroute to your location.  </Text>
      </View>
        
        <TouchableOpacity  onPress={() => { onPressMobileNumberClick("911") }} style={styles.emergency}>
          <Text style = {{ color: '#FFF', fontSize: 20, marginTop: 0}}>  Emergency  </Text>
        </TouchableOpacity>

        <TouchableHighlight style={styles.cancelButton} onPress={() => {}} >
          <Text style={styles.textStyle1}>Cancel</Text>
        </TouchableHighlight>

        <View style={{borderWidth:'1.5', paddingBottom: 5, paddingTop: 10, paddingLeft: 5, paddingRight: 5, borderRadius: '10', margin:10, marginTop:50 }}>
          <Text style={styles.text3}> ATTENTION! </Text>
          <Text style={styles.paragraph}>
          {`In the case of an emergency, rapidly tap the EMERGENCY button 3 times to initate a response. SafeWalk will dispatch personnel to your location immediately and notify emergency services.`}
          </Text>
          </View>

      </View>
    );
}

const styles = StyleSheet.create({
  text3: 
  {
    color: '#FE2633', 
    fontSize: 15, 
    fontWeight: 'bold', 
    alignItems: 'left',
    margin: 1
  },
  textStyle1: {
    color: '#002145',
    fontSize: 20,
    textAlign: 'center',
  },
  paragraph: {
    margin: 4,
    fontSize: 15,
    textAlign: 'justify',
  },
  emergency: {
    borderWidth:1,
    borderColor:'#FE2633',
    alignItems:'center',
    justifyContent:'center',
    width:250,
    height:50,
    backgroundColor:'#FE2633',
    borderRadius:20,
    marginTop: 60
  },
  cancelButton: {
    backgroundColor: '#FFFFFF',
    alignItems:'center',
    justifyContent:'center',
    borderColor: '#002145',
    borderRadius: 20,
    borderWidth: 2,
    width:250,
    height:50,
    marginTop: 20
  },
  greyBubble: {
    borderWidth:1,
    borderColor:'#A0A0A0',
    alignItems:'center',
    justifyContent:'center',
    width:250,
    height:50,
    backgroundColor:'#A0A0A0',
    borderRadius:20,
    marginTop: 20
  },
  profile: {
    resizeMode: 'contain',
    alignItems: 'center',
    marginTop: 20
  }
});

export default Verification;
