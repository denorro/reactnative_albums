import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView, FlatList} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {

    constructor(){
        super();
        this.state = {
            albums: []
        };
    }

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}))
            .catch(error => console.log('Error: ', error));
    }

    renderAlbums(){
        return this.state.albums.map( (album, index) => 
            <AlbumDetail keyExtractor={(album, index) => index} 
                key={index} 
                artistImg={album.thumbnail_image} 
                albumName={album.title} 
                artistName={album.artist} 
                albumImage={album.image}
                />
        );
    }

    render(){
        console.log('State: ', this.state);
        return(
            <View>
                {this.renderAlbums()}                         
            </View>
        )
    }
}