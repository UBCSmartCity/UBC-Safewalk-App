import {  SafeAreaView, StyleSheet, Text, TouchableOpacity, View , Button} from 'react-native';

import React, { useState } from 'react';
import CheckBox from 'expo-checkbox'
import { Ionicons } from '@expo/vector-icons';


function supAssign({ navigation }) {   
  
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
  
          <View style = {{marginTop: 10, marginLeft: 5}}>
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
  
          <View style = {{marginTop: 10, marginLeft: 5}}>
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
                    marginLeft:90,
                    justifyContent:'center',
                    width:250,
                    height:50,
                    backgroundColor:'#FF6600',
                    borderRadius:20,
                    marginTop: 60
                    }}
                >
                <Text style = {{ color: '#FFF', fontSize: 20, marginTop: 0}}>  Assign  </Text>
                </TouchableOpacity>
          </View>
        </View>
      );
  }
  
  const styles = StyleSheet.create({
  title1: 
    {
      color: '#FF6600', 
      fontSize: 20, 
      fontWeight: 'bold', 
      textAlign: 'center',
      marginTop: 20,
      marginLeft: 9,
    },
    title2: 
    {
      color: '#030919', 
      fontSize: 20, 
      fontWeight: 'bold', 
      alignItems: 'left',
      margin: 1,
      marginLeft: 8,
    },
    AvailableSW: 
    {
      color: '#555B6A', 
      fontSize: 18, 
      alignItems: 'left',
      margin: 15,
      marginTop: 20,
    },
    UnavailableSW: 
    {
      color: '#555B6A', 
      fontSize: 18, 
      alignItems: 'left',
      margin: 15,
      marginLeft: 23,
      textDecorationLine: 'line-through'
    },
    c1: 
    {
      marginLeft: 300,
      marginTop: -35,
    },
    c2: 
    {
      marginLeft: 300,
      marginTop: -35,
    },
    paragraph: {
      padding: 20,
      marginLeft: -5,
      fontSize: 15,
      color: '#555B6A',
      textAlign: 'justify',
    },

      listContainer: {
      flexDirection: 'column',
      marginTop: 10,
      marginLeft: 15,
    },

  });

export default supAssign; {/* TODO: add to navigation LATER */}
