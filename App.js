import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      numero: 0
    }
  }

  aumentar = () => {
    this.setState({
      numero: this.state.numero + 1
    })
  }

  decrementar = () => {
    if(this.state.numero != 0){
      this.setState({
        numero: this.state.numero - 1
      })
    }else{
      this.setState({
        numero: 0
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header name="Contador"/>
        <Body numero={this.state.numero}/>
        <Footer sumar={ this.aumentar} restar={ this.decrementar}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to right, rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62))',
    
  },
  header: {
    flex: 1,
    backgroundColor: '#ffff00',
    justifyContent: 'center',
    alignItems: 'center'
   
  },
  body: {
    flex: 3,
    backgroundColor: '#63a4ff',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  footer: {
    flex: 1,
    backgroundColor: '#f4511e',
   
  },
});

export default App;
