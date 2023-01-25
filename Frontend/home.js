import {  Image, SafeAreaView, ImageBackground, StyleSheet, Text,  TouchableOpacity, Linking, View , Button} from 'react-native';

function HomeScreen({ navigation }) { 

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity  onPress={() => { onPressMobileNumberClick("6048225355") }}
            style={{
                borderWidth:1,
                borderColor:'#FF6600',
                alignItems:'center',
                justifyContent:'center',
                width:200,
                height:200,
                backgroundColor:'#FF6600',
                borderRadius:100,
                }}
            >
            <Text style = {{ color: '#FFF', fontSize: '25%', fontWeight: 'bold', marginTop: 0}}>  CALL  </Text>
            <Text style = {{ color: '#FFF', fontSize: '25%', fontWeight: 'bold', marginTop: 2}}> SAFEWALK  </Text>
            </TouchableOpacity>

        <Text style = {{ color: '#000', fontSize: 15, marginTop: 15,  textAlign: "center" }}> In the case where accompaniment is {'\n'}  needed, press this button so we can attend {'\n'}  to your location immediately   </Text>
        
        
        <TouchableOpacity  onPress={() => { onPressMobileNumberClick("911") }}
            style={{
                borderWidth:1,
                borderColor:'#FE2633',
                alignItems:'center',
                justifyContent:'center',
                width:250,
                height:50,
                backgroundColor:'#FE2633',
                borderRadius:20,
                marginTop: 60
                }}
            >
            <Text style = {{ color: '#FFF', fontSize: 20, marginTop: 0}}>  Emergency  </Text>
            </TouchableOpacity>
        
        <View style = {{marginTop: 20}}>
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
    );
}

export default HomeScreen;
