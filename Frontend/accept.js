import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity, Modal } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App({ navigation }) {
   const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);

  const onPress = () => {};
  return (
    <View style={styles.container}>
        
          <View style={styles.subcontainer}>
            <Text style={styles.paragraph}>
                Name  : <Text style={{fontWeight: 'bold'}}> Hailey </Text> 
            </Text>
            <Text style={styles.paragraph}>
                Verify : <Text style={{fontWeight: 'bold'}}> KWB294 </Text>  
            </Text>
          </View>
     
     
      <Card style={styles.mapcard}>
        
      </Card>
      <Card style={styles.confirmcard}>
          <View style={{ flexDirection: 'row'}}>
          <Text style={styles.titleText}> Pickup Address </Text>
          
           <View style={{marginLeft: 130 , marginTop: 15, width: 50, height: 20, backgroundColor: '#FF660026', borderRadius: 3}}>
            <Text style={{marginLeft: 10, color: '#ff6600'}}>
            1.4km
            </Text>
           </View>
           </View>
          
          <View style={{ flexDirection: 'row'}}>
          <View style={{marginLeft: 10 , marginRight: 10, marginTop: 2 , width: 10, height: 10, backgroundColor: '#2FA94E', borderRadius: 100}}>
           </View>
          <Text style={styles.locationText}> Start Location </Text>
          </View>
          <Text style={styles.titleText}> Dropoff Address </Text>
          
          <View style={{ flexDirection: 'row'}}>
          <View style={{marginLeft: 10 , marginRight: 10, marginTop: 6 , width: 10, height: 10, backgroundColor: '#FF6600', borderRadius: 50}}>
           </View>
          <Text style={styles.locationText}>  End Location </Text>
          </View>
          <Text style={styles.timeTitle}> Request Time </Text>
          <View style={{marginLeft: 20, width: 250, marginTop: 3}}>
          <View style={{ borderBottomColor: '#EBEBEB', borderBottomWidth: StyleSheet.hairlineWidth, }}/>
          </View>
          
          <Text style={styles.timeText}> 20:45 </Text>

          <View style={{marginLeft: 20, width: 250, marginTop: 3, marginBottom: 10}}>
          <View style={{ borderBottomColor: '#EBEBEB', borderBottomWidth: StyleSheet.hairlineWidth, }}/>
          </View>

          <Text style={{marginBottom: 10, marginLeft: 10, fontSize: 14}}>  Are you ok ? What's the delay ? </Text>
          <View style={{ alignItems: 'center' }}>  
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity  onPress={() => navigation.navigate('Home')}
                style={{
                    borderWidth:1,
                    borderColor:'#EF5904',
                    alignItems:'center',
                    justifyContent:'center',
                    width:180,
                    height:30,
                    backgroundColor:'white',
                    borderRadius:10,
                    marginTop: 3,
                    marginBottom: 30
                    }}
                >
                <Text style = {{ color: '#EF5904', fontSize: 20, marginTop: 0}}>  I have an issue  </Text>
                </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('Home')}
                style={{
                    borderWidth:1,
                    borderColor:'#118C07',
                    alignItems:'center',
                    justifyContent:'center',
                    width:180,
                    height:30,
                    backgroundColor:'#118C07',
                    borderRadius:10,
                    marginTop: 3,
                    marginBottom: 30,
                    marginLeft: 10
                    }}
                >
                <Text style = {{ color: '#FFF', fontSize: 20, marginTop: 0}}>  Accept  </Text>
                </TouchableOpacity>

          </View>
          
          </View>
      </Card>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#e6e3e3',
    padding: 8,
  },
  subcontainer:{
   backgroundColor: '#03091980', 
   width: 200, 
   height: 50,
   marginTop: 10, 
   marginLeft: 120, 
   marginRight: 70,
   borderRadius: 10,
   marginBottom: 20
  },
  paragraph: {
    margin: 2,
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    marginTop: 5
  },
  mapcard:{
    height: 400,
    backgroundColor: '#e6e3e3',
    elevation: 0
  },
  confirmcard:{
    marginTop: 10,
    paddingBottom: 10
  }, 
  titleText: {
    fontSize: '12px',
    color: '#555B6A',
    marginTop: 10
  },
  locationText:{
    fontSize: '14px'
  },
  timeTitle:{
    fontSize: '10px',
    marginTop: 10,
    marginLeft: 30,
    color: '#555B6A',
  },
  timeText:{
    fontSize: '12px',
    marginTop: 2,
    marginLeft: 30,
    marginBottom: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 400
  },
  buttonContainer: {
    alignItems: 'center'
  },
   confirmButton: {
    backgroundColor: '#118C07',
    borderRadius: 5,
    height: 60,
    width:150,
    padding: 17,
    marginTop: 360,
    marginLeft: -165,
  }
});
