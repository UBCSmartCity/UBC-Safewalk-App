import {  SafeAreaView, StyleSheet, Text, TouchableOpacity, View , Button} from 'react-native';
import CheckBox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';

function supAssign({ navigation }) {      
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
              <Text style={styles.AvailableSW}> Ciran <CheckBox style={{position: 'absolute', right: 30}}/> </Text>
              <Text style={styles.AvailableSW}> Nadia <CheckBox style={{position: 'absolute', right: 30}}/> </Text>
              <Text style={styles.AvailableSW}> Aidan <CheckBox style={{position: 'absolute', right: 30}}/> </Text>
              <Text style={styles.AvailableSW}> Elmira <CheckBox style={{position: 'absolute', right: 30}}/> </Text>
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
      margin: 1
    },
    title2: 
    {
      color: '#030919', 
      fontSize: 15, 
      fontWeight: 'bold', 
      alignItems: 'left',
      margin: 1
    },
    AvailableSW: 
    {
      color: '#555B6A', 
      fontSize: 15, 
      alignItems: 'left',
      margin: 5
    },
    UnavailableSW: 
    {
      color: '#555B6A', 
      fontSize: 15, 
      alignItems: 'left',
      margin: 5,
      textDecorationLine: 'line-through'
    },
    paragraph: {
      padding: 20,
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
