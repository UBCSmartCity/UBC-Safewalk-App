// import * as React from 'react';
import React, {useState} from 'react';
import { Text, View, StyleSheet , SafeAreaView,TouchableOpacity, VirtualizedList, Switch, FlatList} from 'react-native';
import Constants from 'expo-constants';
import tasksjson from './tasks.json';


// Need to add dependency 
// use "npm install react-native-dropdown-select-list"
import { SelectList } from 'react-native-dropdown-select-list';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
  
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
export default function Supervisor() {
  const [selected, setSelected] = React.useState("");
  
  const myItemSeparator = () => {
    return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
    };

  const data = [
      {key:'1', value:'Select', disabled:true},
      {key:'1', value:'Today',},
      {key:'2', value:'Last Week'},
      {key:'3', value:'Next Week'},
      {key:'4', value:'All Time'},
  ]

  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>
        Walk Requests
      </Text>
       <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
      />
    

<View style={{ flexDirection: "row" }}>
      <TouchableOpacity 
      style={{backgroundColor: '#FFFFFF', 
              padding: 15,
              left:10,
              marginTop: 10,
              borderColor: '#002145',
              borderRadius:'10',
              borderWidth:'2',
              padding: 16,
              paddingHorizontal:55,
              alignItems: 'center',
              width: '48%'
              }}
              onPress={()=>{return}}> 
        <View style = {styles.button1}>
          <Text style = {styles.text1}>Unassigned</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
      style={{
              backgroundColor:'#FFFFFF', 
              padding: 15,
              right:-25,
              marginTop: 10,
              borderColor: '#002145',
              borderRadius:'10',
              borderWidth:'2',
              padding: 16,
              paddingHorizontal:45,
              alignItems: 'center',
              width: '45%'
              }}
              onPress={()=>{return}}>
        <View style = {styles.button2}>
          <Text style = {styles.text2}>Assigned</Text>
        </View>
      </TouchableOpacity>
    </View>


    <SafeAreaView style={styles.container}>
    
    {/* <View style={{ flexDirection: "row"}}>
      <Text style={{}}>
          Unassigned
      </Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={{}}>
        Assigned
      </Text>
    </View> */}
    
    <FlatList
      data={tasksjson}
      renderItem={({ item }) => 
        <View  style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
          <Text >{item.startloc}</Text>
          <Text >{item.endloc}</Text>
          <Text >{item.dist}</Text>
          <Text >{item.rectime}</Text>
        </View>
      }
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={myItemSeparator}
    />

    </SafeAreaView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  containerSW: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  item: {
    backgroundColor: '#f9c2ff',
    height: 80,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  header : {
    fontSize: 24,
    color: '#FF6600',
    marginLeft: "49%"
  },
  text : {
    fontSize: 12,
    color: 'white'
  }
});