import React, { Component } from 'react';
import {View, Text, Image, Button, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import Divider from './Divider';

export default class AlbumDetail extends Component {
    constructor(props){
        super(props);
        this.imageClick = this.imageClick.bind(this);
    }

    imageClick = () => {
        Alert.alert('Image Clicked!');
    }

    render(){
        return (
            <View style={styles.albumDetailContainer}>
                <View style={styles.artistBio}>
                    <Image source={{uri: this.props.artistImg}} style={styles.thumbnailImg}/>
                    <View>
                        <Text style={styles.artistBioText}>Album: {this.props.albumName}</Text>
                        <Text  style={styles.artistBioText}>Artist: {this.props.artistName}</Text>
                    </View>
                </View>
                
                <View style={styles.albumView}>
                    <TouchableHighlight onPress={() => this.imageClick()}>
                        <Image source={{uri: this.props.albumImage}} style={styles.albumImg} />
                    </TouchableHighlight>                    
                </View>
                <View>
                    <Button title="Buy Now" color="green" onPress={() => console.log('Buy Now Pressed')}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    albumDetailContainer:{
        marginBottom: 10
    },
    artistBio:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    artistBioText:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },
    thumbnailImg: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    albumView: {
        alignItems: 'center',
        marginBottom: 5
    },
    albumImg: {
        width: 400,
        height: 250,
        resizeMode: 'stretch'
    }   

});