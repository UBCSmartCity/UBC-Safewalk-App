import React, {useState} from 'react';
import {  Image, SafeAreaView, ImageBackground, StyleSheet, Text,  TouchableOpacity, Linking, View , Button, TouchableHighlight, Modal} from 'react-native';

function HomeScreen({ navigation }) { 

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);

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

        <TouchableOpacity  onPress={() => {setModalVisible(true);}}
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
            <Text style = {{ color: '#FFF', fontSize: 30, fontWeight: 'bold', marginTop: 0}}>  REQUEST  </Text>
            <Text style = {{ color: '#FFF', fontSize: 30, fontWeight: 'bold', marginTop: 2}}> SAFEWALK  </Text>
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

            <View style={{borderWidth:'1.5', paddingBottom: 5, paddingTop: 10, paddingLeft: 5, paddingRight: 5, borderRadius: '10', margin:10, marginTop:50 }}>
            <Text style={styles.text3}> ATTENTION! </Text>
            <Text style={styles.paragraph}>
            {`In the case of an emergency, rapidly tap the EMERGENCY button 3 times to initate a response. SafeWalk will dispatch personnel to your location immediately and notify emergency services.`}
            </Text>
            </View>
          
          <View>
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
          >
          <View style={{backgroundColor:'#000000aa', flex:1}}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Current Location</Text>
  
                  <TouchableHighlight
                    style={styles.confirmButton}
                    onPress={() => {setModalVisible(!modalVisible); setModalVisible1(true)}}
                  >
                  <Text style={styles.textStyle}>Confirm</Text>
                  </TouchableHighlight>

                  <TouchableHighlight
                    style={styles.cancelButton}
                    onPress={() => {setModalVisible(!modalVisible);}}
                  >
                  <Text style={styles.textStyle1}>Cancel</Text>
                  </TouchableHighlight>

              </View>
            </View>
          </View>
          </Modal>
        </View>

        <View>
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
          >
          <View style={{backgroundColor:'#000000aa', flex:1}}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText1}>Destination</Text>
  
                  <TouchableHighlight
                    style={styles.confirmButton}
                    onPress={() => {
                      setModalVisible1(!modalVisible1);
                    }}
                  >
                  <Text style={styles.textStyle}>Confirm</Text>
                  </TouchableHighlight>

                  <TouchableHighlight
                    style={styles.cancelButton}
                    onPress={() => {setModalVisible1(!modalVisible1);}}
                  >
                  <Text style={styles.textStyle1}>Cancel</Text>
                  </TouchableHighlight>

              </View>
            </View>
          </View>
          </Modal>
        </View>

      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  text3: 
  {
    color: '#FE2633', 
    fontSize: 15, 
    fontWeight: 'bold', 
    alignItems: 'left',
    margin: 1
  },
  modalText: {
    marginTop: 1,
    marginLeft: -200,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  modalText1: {
    marginTop: 1,
    marginLeft: -250,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: '#118C07',
    borderRadius: 5,
    height: 60,
    width:150,
    padding: 17,
    marginTop: 360,
    marginLeft: -165,
  },
  cancelButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#002145',
    borderRadius: 5,
    borderWidth: 2,
    height: 60,
    width:150,
    padding: 17,
    marginTop: -60,
    marginLeft: 165,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    marginTop:10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  textStyle1: {
    color: '#002145',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  modalView: {
    marginTop: 200,
    marginLeft:15,
    marginRight:15,
    height:500,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  CenterView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  paragraph: {
    margin: 4,
    fontSize: 15,
    textAlign: 'justify',
  }
});


export default HomeScreen;
