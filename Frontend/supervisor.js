import * as React from 'react';
import { Text, View, StyleSheet , SafeAreaView, VirtualizedList } from 'react-native';
import Constants from 'expo-constants';


// Need to add dependency 
import { SelectList } from 'react-native-dropdown-select-list';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const getItem = (_data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Person ${index + 1}`,
  });
  
  const getItemCount = _data => 50;
  
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
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
        Walk Requests
      </Text>
       <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
      />
      
    <SafeAreaView style={styles.container}>
    
    <VirtualizedList
        initialNumToRender={4}
        renderItem={({item}) => 
        <Item title={item.title} />
        }
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
    />

    </SafeAreaView>
      
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
  }
});
