import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Footer extends Component {
  render() {
    return (
        <View style={styles.footer}>
            <Button 
            title="Aumentar"
            onPress={this.props.sumar}
            />
            <Button 
            title="Decrementar"
            onPress={this.props.restar}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        backgroundColor: '#f4511e',
  }
});

export default Footer;
