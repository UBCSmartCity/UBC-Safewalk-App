import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity, Modal } from 'react-native';
import Constants from 'expo-constants';
import {  widthPercentageToDP as wp,  heightPercentageToDP as hp} from "react-native-responsive-screen";

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
                Name  : <Text style={{fontWeight: 'bold'}}> Hailey 123333</Text> 
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
          
          <View style={{marginLeft: wp('40%') , marginTop: hp('1.5%'), width: wp('15%'), height: hp('4%'), backgroundColor: '#FF660026', borderRadius: 3}}>
            <Text style={{textAlign: 'center', color: '#ff6600'}}>
            1.4km
            </Text>
           </View>
           </View>
          
          <View style={{ flexDirection: 'row'}}>
          <View style={{marginLeft: wp('3%') , marginRight: wp('3%'), marginTop: hp('1%') , width: wp('3%'), height: hp('1.8%'), backgroundColor: '#2FA94E', borderRadius: 100}}>
           </View>
          <Text style={styles.locationText}> Start Location </Text>
          </View>
          <Text style={styles.titleText}> Dropoff Address </Text>
          
          <View style={{ flexDirection: 'row'}}>
          <View style={{marginLeft: wp('3%') , marginRight: wp('3%'), marginTop: hp('1%') , width: wp('3%'), height: hp('1.8%'), backgroundColor: '#FF6600', borderRadius: 50}}>
           </View>
          <Text style={styles.locationText}>  End Location </Text>
          </View>
          <Text style={styles.timeTitle}> Request Time </Text>
          <View style={{marginLeft: hp('4%'), width: wp('73%'), marginTop: hp('0.5%')}}>
          <View style={{ borderBottomColor: '#EBEBEB', borderBottomWidth: StyleSheet.hairlineWidth, }}/>
          </View>
          
          <Text style={styles.timeText}> 20:45 </Text>

          <View style={{marginLeft: hp('4%'), width: wp('73%'), marginTop: hp('0.5%'), marginBottom: hp('2%')}}>
          <View style={{ borderBottomColor: '#EBEBEB', borderBottomWidth: StyleSheet.hairlineWidth, }}/>
          </View>

          <View style={{ alignItems: 'center' }}>  
            <TouchableOpacity  onPress={() => navigation.navigate('acceptScreenTwo')}
                style={{
                    borderWidth:1,
                    borderColor:'#118C07',
                    alignItems:'center',
                    justifyContent:'center',
                    width:wp('80%'),
                    height:hp('6%'),
                    backgroundColor:'#118C07',
                    borderRadius:10,
                    marginTop: hp('1%'),
                    marginBottom: hp('6%'),
                    }}
                >
                <Text style = {{ color: '#FFF', fontSize: 20, marginTop: 0}}>  Accept  </Text>
                </TouchableOpacity>
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
    padding: hp('1.5%'),
  },
  subcontainer:{
    backgroundColor: '#03091980', 
    width: wp('58%'), 
    height: hp('10%'),
    marginTop: hp('2%'), 
    marginLeft: wp('35%'), 
    marginRight: wp('20%'),
    borderRadius: 10,
    marginBottom: hp('4%')
   },
   paragraph: {
     margin: wp('0.5%'),
     fontSize: 14,
     textAlign: 'center',
     color: 'white',
     marginTop: hp('1%')
   },
  mapcard:{
    height: hp('60%'),
    backgroundColor: '#e6e3e3',
    elevation: 0
  },
  confirmcard:{
    marginTop: hp('2%'),
    paddingBottom: hp('2%')
  }, 
  titleText: {
    fontSize: '12px',
    color: '#555B6A',
    marginTop: hp('2%')
  },
  locationText:{
    fontSize: '14px'
  },
  timeTitle:{
    fontSize: '10px',
    marginTop: hp('2%'),
    marginLeft: wp('8.5%'),
    color: '#555B6A',
  },
  timeText:{
    fontSize: '12px',
    marginTop: hp('0.4%'),
    marginLeft: wp('8.5%'),
    marginBottom: hp('2%')
  }
});
