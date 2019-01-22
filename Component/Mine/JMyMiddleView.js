/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
var MiddleData = require('./MiddleData.json');

var MyMiddleView = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                {this.renderMiddleView()}
            </View>
        );
    },
    renderMiddleView(){
        var itemArr = [];
        for (var i = 0; i < MiddleData.length; i++) {
            itemArr.push(
                <TouchableOpacity key={i} activeOpacity={0.5} style={styles.middleViewStyles}>
                    <Image source={{uri: MiddleData[i].iconName}} style={{width:40, height:30, marginBottom:3}}/>
                    <Text>{MiddleData[i].title}</Text>
                </TouchableOpacity>
            )
        }
        return itemArr;
    }
})

const styles = StyleSheet.create({
    container: {
        // 设置主轴的方向
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        // 设置主轴的对齐方式
        justifyContent: 'space-around'
    },
    middleViewStyles: {
        height: 68,
        width: 68,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

module.exports = MyMiddleView;

