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
import { color } from 'react-native-reanimated';
  
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
      
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
        <Text style={styles.header}>
          Walk Requests
        </Text>
        <View style={{maxWidth:'40%', maxHeight:'50%'}}>
          <SelectList
          setSelected={(val) => setSelected(val)} 
          search = 'false'
          data={data} 
          save="value"
        />
        </View>
      </View>
      
       
    

<View style={{ flexDirection: "row" , width:"100%" , justifyContent:"space-evenly",display:"flex",alignContent:"flex-start"}}>
      <TouchableOpacity 
      style={{backgroundColor: '#FFFFFF', 
              padding: 15,
              marginTop: 10,
              borderColor: '#002145',
              borderRadius:'10',
              borderWidth:'2',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              alignContent:'flex-start',
              width: '45%'
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
              marginTop: 10,
              borderColor: '#002145',
              borderRadius:'10',
              borderWidth:'2',
              alignItems: 'center',
              width: '45%'
              }}
              onPress={()=>{return}}>
        <View style = {styles.button2}>
          <Text style = {styles.text2}>Assigned</Text>
        </View>
      </TouchableOpacity>
    </View>

    <FlatList
      data={tasksjson}
      renderItem={({ item }) => 
        <View  style={styles.item}>
          <View style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingBottom: 15
          }}>
            <Text style={{ 
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 18,
              color: '#030919',
              paddingRight: 20
            }}>{item.name}</Text>
              <Text style={{
              color:"#FF6600", 
              borderColor:'#FF6600',
              borderWidth: 1,
              backgroundColor: "FF6600",
              borderRadius: 5,
              padding: 5
            }}>{item.dist}</Text>
            
            <Text style={{
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 14,
              color: '#030919',
              marginLeft: "auto"
              }}>{item.rectime}</Text>
          </View>
          <View style={{display:'flex', flexDirection:'column'}}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <Text >{item.startloc}</Text>
              <Text >{item.endloc}</Text>

            </View>


            <TouchableOpacity style = {{width: '20%', marginLeft:'auto'}} onPress={()=>{return}}>
                <Text style = {{color:"#FF6600", 
                                borderColor:'#FF6600',
                                borderWidth: 1,
                                borderRadius: 5,
                                padding: 10
                                }}>
                Assign</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={myItemSeparator}
    />
      
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
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    paddingHorizontal: 16,
    backgroundColor:'white'
  },
  header : {
    fontSize: 24,
    color: '#FF6600',
    textAlignVertical:"center",
    fontWeight: '700'
  },
  text : {
    fontSize: 12,
    color: 'white'
  }
});