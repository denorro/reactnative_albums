import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Divider from './src/components/Divider';
import AlbumList from './src/components/AlbumList';



export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Header headerText={'Albums'} />
          <AlbumList />
        </View>      
    );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1
  },
  mainContent: {
    paddingLeft: 3,
    paddingRight: 3
  }
});
