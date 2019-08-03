import React, { Component } from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from 'native-base';
import StarRating from 'react-native-star-rating'
export default class SearchTab extends Component {

    render() {
        return (
        <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd'}}>
            <View style={{flex:2}}>
                <Image source ={this.props.Imageuri}
                
                style={{flex:1,width:null,height:null,resizeMode:'stretch'}}/>
            </View>

            <View style={{flex:1,paddingLeft:10,paddingTop:10}}>               
            <Text>{this.props.ID}</Text>
            <StarRating 
                disabled={true}
                maxStars={5}
                rating={this.props.rating}
                starSize={14}
                />
            </View>
        </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});