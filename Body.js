import React,  { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Body extends Component {
  render() {
    return (
        <View style={styles.body}>
            <Text style={{fontSize: 200, color: 'white'}}>{this.props.numero}</Text>
        </View>
    );
  }
}
 
const styles = StyleSheet.create({
    body: {
        flex: 3,
        backgroundColor: '#63a4ff',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Body;
