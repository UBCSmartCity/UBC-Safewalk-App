import {  SafeAreaView, StyleSheet, Text, TouchableOpacity, View , Button} from 'react-native';

import React, { useState } from 'react';
import CheckBox from 'expo-checkbox'
import { Ionicons } from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


function SupAssign({ navigation }) {   
  
  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
    return (
        <View style={{ flex: 1, alignItems: 'left' }}>
            <Text style={styles.title1}> Assign Safewalker </Text>
          <Text style={styles.paragraph}>
              {`Assign a safewalker to accompany the selected user for their upcoming walk. Safewalkers that are already on a task will appear unavailable.`}
          </Text>
  
          <View style = {{marginTop: hp('1%'), marginLeft: hp('1%')}}>
            <Text style={styles.title2}> Available for this task: <Text style={{fontStyle: 'italic', fontWeight: 'normal'}}> (Select one or more) </Text></Text>
            <View style={styles.container}>
            <View style={styles.listContainer}>
              <Text style={styles.AvailableSW}> Ciran  </Text>
              <View style={styles.c1}>
              <CheckBox style={styles.checkbox} value={isChecked} onValueChange={setChecked} color={isChecked ? '#FF6600' : undefined}/>
              </View>
              <Text style={styles.AvailableSW}> Nadia </Text>
              <View style={styles.c1}>
              <CheckBox style={styles.checkbox} value={isChecked1} onValueChange={setChecked1} color={isChecked1 ? '#FF6600' : undefined}/>
              </View>
              <Text style={styles.AvailableSW}> Aidan </Text>
              <View style={styles.c1}>
              <CheckBox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} color={isChecked2 ? '#FF6600' : undefined}/> 
              </View>
              <Text style={styles.AvailableSW}> Elmira  </Text>
              <View style={styles.c1}>
              <CheckBox style={styles.checkbox} value={isChecked3} onValueChange={setChecked3} color={isChecked3 ? '#FF6600' : undefined}/>
              </View>
            </View>
            </View>
          </View> 
  
          <View style = {{marginTop: hp('2%'), marginLeft: hp('1%')}}>
            <Text style={styles.title2}> Unavailable for this task: </Text>
            <View style={styles.container}>
            <View style={styles.listContainer}>
              <Text style={styles.UnavailableSW}> Ryan </Text>
              <Text style={styles.UnavailableSW}> Cinton </Text>
              <Text style={styles.UnavailableSW}> Pawan </Text>
            </View>
            </View>
          </View> 
          
          <View style={{ alignItems: 'center' }}>  
            <TouchableOpacity  onPress={() => { }}
                style={{
                    borderWidth:1,
                    borderColor:'#FF6600',
                    alignItems:'center',
                    marginLeft:hp('6.5%'),
                    justifyContent:'center',
                    width: wp('70%'),
                    height:hp('5%'),
                    backgroundColor:'#FF6600',
                    borderRadius:20,
                    marginTop: hp('6%')
                    }}
                >
                <Text style = {{ color: '#FFF', fontSize: hp('3%'), marginTop: 0}}>  Assign  </Text>
                </TouchableOpacity>
          </View>
        </View>
      );
  }
  
  const styles = StyleSheet.create({
  title1: 
    {
      color: '#FF6600', 
      fontSize: hp('3%'), 
      fontWeight: 'bold', 
      textAlign: 'center',
      marginTop: hp('1.2%'),
      marginLeft: hp('0.5%'),
    },
    title2: 
    {
      color: '#030919', 
      fontSize: hp('2%'), 
      fontWeight: 'bold', 
      alignItems: 'left',
      margin: hp('0.5%'),
      marginLeft: hp('1%'),
    },
    AvailableSW: 
    {
      color: '#555B6A', 
      fontSize: hp('2%'), 
      alignItems: 'left',
      margin: hp('1.2%'),
      marginTop: hp('3%'),
    },
    UnavailableSW: 
    {
      color: '#555B6A', 
      fontSize: hp('2%'), 
      alignItems: 'left',
      margin: hp('1.2%'),
      marginLeft: hp('1%'),
      textDecorationLine: 'line-through'
    },
    c1: 
    {
      marginLeft: hp('35%'),
      marginTop: hp('-2%'),
    },
    c2: 
    {
      marginLeft: hp('35%'),
      marginTop: hp('-2%'),
    },
    paragraph: {
      padding: 20,
      marginLeft: hp('-0.5%'),
      fontSize: hp('1.5%'),
      color: '#555B6A',
      textAlign: 'justify',
    },

      listContainer: {
      flexDirection: 'column',
      marginTop: hp('1%'),
      marginLeft: hp('1.5%'),
    },

  });

export default SupAssign; {/* TODO: add to navigation LATER */}
