import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{ this.props.name }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Header;
