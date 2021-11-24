import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  onPressLearnMore(){
    console.warn('Si ingresaste datos');
  }
  render(){
    return(
      <view style={styles.container}> 
        <Button
          onPress={this.onPressLearnMore}
          title="Login"
          color='#841584'
          accessibilityLabel='learn more about this'
        />
      </view>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
