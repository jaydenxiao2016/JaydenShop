/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import {Image, StyleSheet} from "react-native";

var Main=require('./JMain');

var LauncheImage = React.createClass({

    render(){
        return (
            <Image source={{uri: 'launchimage'}} style={styles.imageStyles}/>
        );
    },
    componentDidMount(){
        setTimeout(()=> {
            this.props.navigator.replace({
                component:Main,//具体路由板块
            })
        },1500);
    }

});

const styles = StyleSheet.create({
    imageStyles: {
        flex: 1
    }
});
module.exports = LauncheImage;
