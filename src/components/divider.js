import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class Divider extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.divider} />
        );        
    }
}

const styles = StyleSheet.create({
    divider: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 0.5
    }
});