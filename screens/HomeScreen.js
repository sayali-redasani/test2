import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import axios from "axios";


export default class HomeScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      info:" ", 
      flag:false
    }
  }

  api=()=>{
    var url = '';
    axios
            .get("https://dog.ceo/api/breeds/image/random")
            .then(response => {
                this.setState({ info: response.data.message,
                flag:true })
            })
            
            .catch(error => {
                Alert.alert(error.message)
            })
    if(this.state.flag){  
      console.log(this.state.flag)

       this.props.navigation.navigate('ImageScreen', { image: this.state.info });
    }
  }

  render(){
    return(
      
    <View style={styles.container}>
      
        <Header
          backgroundColor={'crimson'}
          centerComponent={{
            text: 'Vayuz Technology',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

         <TouchableOpacity style={styles.fetchButton} onPress={this.api}>
          <Text style={styles.buttonText}>Fetch</Text>
        </TouchableOpacity>
    </View>

    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe8ee',
  },
  fetchButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
