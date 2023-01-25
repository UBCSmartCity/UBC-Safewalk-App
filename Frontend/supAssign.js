import {  Image, SafeAreaView, ImageBackground, StyleSheet, Text,  TouchableOpacity, Linking, View , Button} from 'react-native';

function supAssign({ navigation }) {      
    return (
      <View style={{ flex: 1, alignItems: 'left' }}>
        <Text style={styles.title1}> {/* TODO: icon here */} Assign Safewalker </Text>
        <Text style={styles.paragraph}>
            {`Assign a safewalker to accompany the selected user for their upcoming walk. Safewalkers that are already on a task will appear unavailable.`}
        </Text>

        <View style = {{marginTop: 10, marginLeft: 5}}>
          <Text style={styles.title2}> Available for this task: </Text> {/* TODO: more text here */}
          {/* TODO: add checkbox */}
          <Text style={styles.title2}> Unavailable for this task: </Text>
          {/* TODO: text strikethrough */}
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
  paragraph: {
    margin: 4,
    fontSize: 15,
    color: '#555B6A',
    textAlign: 'justify',
  }
});


export default supAssign; {/* TODO: add to navigation LATER */}
