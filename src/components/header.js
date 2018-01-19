import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.header}>
                <Text>{this.props.heading}</Text>
            </View>
        );        
    }
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center'
    }
});