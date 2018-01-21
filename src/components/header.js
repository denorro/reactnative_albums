import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.header}>
                <Text style={styles.headerText}>{this.props.headerText}</Text>
            </View>
        );        
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 1,
        elevation: 3,
        marginBottom: 5
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        fontStyle: 'italic'
    }
});