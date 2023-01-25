import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


// Need to add dependency 
import { SelectList } from 'react-native-dropdown-select-list';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Supervisor() {
  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Select', disabled:true},
      {key:'1', value:'Today',},
      {key:'2', value:'Last Week'},
      {key:'3', value:'Next Week'},
      {key:'4', value:'All Time'},
  ]
  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>
        Walkp Requests
      </Text>
       <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
      />
      

      <Text>
        Checking this
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header : {
    fontSize: 24,
    color: '#FF6600',
    marginLeft: "49px",
    marginRight: "131px"
  }
});
