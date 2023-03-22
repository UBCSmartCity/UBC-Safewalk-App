import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

//https://blog.logrocket.com/react-native-maps-introduction/
//link for map feature


export default function App({ navigation }) {
  const [accepted, setAccept] = useState(false);

  const handleAccept = () => {
    setAccept(true)
  };

  const handleCancel = () => {
    setAccept(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.infocont}>
        <Text style={{ color: 'white' }}>Name: Hailey</Text>
        <Text style={{ color: 'white' }}>Verify: KWB294</Text>
      </View>

      <View style={styles.map}><Text>MAP GOES HERE</Text></View>

      <View style={styles.foot_cont}>
        <View>
          <Text>Pickup Address</Text>
          <View>
            <Text>1.4km</Text>
          </View>
        </View>
        <Text>Start Location: </Text>
        <Text>Dropoff Address: </Text>
        <Text>End Location: </Text>
        <Text>Request Time</Text>
        <Text>20:45</Text>
        {!accepted ?
          <TouchableOpacity onPress={handleAccept} style={styles.accepteButton}>
            <Text style={{ color: 'white' }}>Accept</Text>
          </TouchableOpacity>
          :
          <>
            <Text>Are you ok? What's the delay?</Text>
            <View style={styles.accepted_cont}>
              <TouchableOpacity onPress={handleCancel} style={styles.accepteButton}>
                <Text>I have an issue</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.accepteButton}>
                <Text style={{ color: 'white' }}>I have arrived</Text>
              </TouchableOpacity>
            </View>
          </>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'space-around'
  },
  infocont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'grey',
    width: '50%',
    borderRadius: 10,
    padding: 10,
  },
  foot_cont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    borderRadius: 10
  },
  accepteButton: {
    alignSelf: 'center',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5
  },
  accepted_cont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  }
});
