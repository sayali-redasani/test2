import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


export default class ImageScreen extends Component {
 
   render(){
     return(
       <View style={styles.container}>
        <Image
          style={styles.imageIcon}
          source={{
            uri:this.props.navigation.getParam('image'),
          }}
        />
       </View>
     )
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1f8dc',
  },
  imageIcon: {
    marginTop:200,
    width: 150,
    height: 150,
    marginLeft: 95,
  }
});
