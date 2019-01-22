/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

// 导入外部的json数据
var HomeHotData = require('../../LocalData/HomeHotData.json');
var CommonCell = require('./JHeaderCommonView');
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var HotView = React.createClass({
    getDefaultProps(){
        return {
            // 回调函数
            popTopHome: null
        }
    },
    render(){
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <CommonCell
                    leftIcon="rm"
                    leftTitle="热门频道"
                    rightTitle={HomeHotData.topArea.title}
                />
                <View style={{flexDirection: 'row'}}>
                    {this.renderTopView()}
                </View>
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomView()}
                </View>
            </View>
        );
    },
    renderTopView(){
        var topViewArr = [];
        //拿到数据
        var topViewData = HomeHotData.topData;
        for (var i = 0; i < topViewData.length; i++) {
            var itemData = topViewData[i];
            topViewArr.push(
                <TouchableOpacity key={i}>
                    <View style={styles.topViewStyle}>
                        {/*左边*/}
                        <View>
                            <Text style={{
                                fontSize: 18,
                                color: '#19111e',
                                marginLeft: 10,
                                marginTop: 5
                            }}>{itemData.title}</Text>
                            <Text style={{
                                fontSize: 14,
                                color: 'gray',
                                marginLeft: 10,
                                marginTop: 5
                            }}>{itemData.subTitle}</Text>
                            <Image source={{uri: 'icon_hot'}} style={{
                                width: 40,
                                height: 20,
                                marginTop: 5,
                                marginBottom: 5,
                                marginLeft: 10,
                                resizeMode: 'contain'
                            }}/>
                        </View>
                        {/*右边*/}
                        <Image source={{uri: itemData.hotImage}}
                               style={{width: 70, height: 70, resizeMode: 'contain'}}/>
                    </View>
                </TouchableOpacity>
            )
        }
        return topViewArr;
    },
    renderBottomView(){
        var bottomViewArr = [];
        //拿到数据
        var bottomData = HomeHotData.bottomData;
        for (var i = 0; i < bottomData.length; i++) {
            var itemData = bottomData[i];
            bottomViewArr.push(
                <TouchableOpacity key={i}>
                    <View style={styles.bottomInnerViewStyle}>
                        <Text style={{
                            fontSize: 14,
                            color: '#19111e',
                            marginLeft: 10,
                            marginTop: 5
                        }}>{itemData.title}</Text>
                        <Text style={{
                            fontSize: 12,
                            color: 'gray',
                            marginLeft: 10,
                            marginTop: 5
                        }}>{itemData.subTitle}</Text>
                        <Image source={{uri: itemData.hotImage}}
                               style={{
                                   width: 70, height: 70, marginTop: 5,
                                   marginBottom: 3, resizeMode: 'contain'
                               }}/>
                    </View>
                </TouchableOpacity>
            )
        }
        return bottomViewArr;
    },
})

const styles = StyleSheet.create({
    container: {
        marginTop: 8
    },
    topViewStyle: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.5 - 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginBottom: 0.5,
    },
    bottomViewStyle:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor:'white'
    },
    bottomInnerViewStyle: {
        // 设置主轴的方向
        alignItems: 'center',
        justifyContent:'center',
        borderRightWidth: 0.5,
        borderRightColor: '#e8e8e8',
        width: width / 4,
    }
});

module.exports = HotView;

