import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';
import Divider from './src/components/divider';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Albums'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
