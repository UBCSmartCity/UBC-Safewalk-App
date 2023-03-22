import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import tasksjson from './tasks.json';
// npm install react-native-elements

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
export default function Supervisor() {
  const myItemSeparator = () => {
    return <View style={{ height: 1, backgroundColor: "grey", marginHorizontal: 10 }} />;
  };

  const [selection, setSelection] = useState(0);

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: 20 }}>
        <Text style={styles.header}>
          Walk Requests
        </Text>
      </View>

      <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-evenly", display: "flex", alignContent: "flex-start" }}>

        <TouchableOpacity style={[styles.assignButtons, selection === 0 ? { backgroundColor: "#133040" } : null]} onPress={() => { setSelection(0) }}>
          <View style={styles.button1}>
            <Text style={[styles.text1, selection === 0 ? { color: 'white' } : null]}>Unassigned</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.assignButtons, selection === 1 ? { backgroundColor: "#133040" } : null]} onPress={() => { setSelection(1) }}>
          <View style={styles.button2}>
            <Text style={[styles.text2, selection === 1 ? { color: 'white' } : null]}>Assigned</Text>
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasksjson}
        renderItem={({ item }) =>
          <View style={styles.item}>
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
                color: "#FF6600",
                borderStyle: 'none',
                backgroundColor: 'rgba(255, 102, 0, 0.15)',
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
            <View style={{ display: 'flex', flexDirection: 'column' }}>
              <View style={{ display: 'flex', flexDirection: 'column' }}>
                <Text >{item.startloc}</Text>
                <Text >{item.endloc}</Text>

              </View>


              <TouchableOpacity style={{ width: '20%', marginLeft: 'auto' }} onPress={() => { return }}>
                <Text style={{
                  color: "#FF6600",
                  borderColor: '#FF6600',
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

    </SafeAreaView>
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
    backgroundColor: 'white',
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
    backgroundColor: 'white'
  },
  header: {
    fontSize: 24,
    color: '#FF6600',
    textAlignVertical: "center",
    fontWeight: '700'
  },
  text: {
    fontSize: 12,
    color: 'white'
  },
  assignButtons: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginTop: 10,
    alignItems: 'center',
    width: '45%',
    borderRadius: 15
  }
});