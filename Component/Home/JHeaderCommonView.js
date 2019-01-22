/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import {StyleSheet, View,TouchableOpacity,Text,Image} from "react-native";

// 引入外部的组件类
var CommonCell = require('./JHeaderCommonView');

// 引入外部的json数据
var Home_D5 = require('../../LocalData/XMG_Home_D5.json');

var HeaderCommonView = React.createClass({
    getDefaultProps(){
        return{
            leftIcon: '',
            leftTitle: '',
            rightTitle: ''
        }
    },
    render() {
        return (
            <TouchableOpacity onPress={()=>alert('点了')}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri: this.props.leftIcon}} style={{width:23, height:23, marginRight:5}}/>
                        <Text style={{fontSize:15}}>{this.props.leftTitle}</Text>
                    </View>
                    {/*右边*/}
                    <View style={styles.rightViewStyle}>
                        <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
                        <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13, marginRight:8, marginLeft:5}}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
})

const styles = StyleSheet.create({
    container: {
        height:44,
        flexDirection:'row',
        backgroundColor:'white',

        alignItems:'center',

        // 设置对齐方式
        justifyContent:'space-between',

        // 设置下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },

    leftViewStyle:{
        // 改变主轴的方向
        flexDirection:'row',
        alignItems:'center',

        marginLeft:8
    },

    rightViewStyle:{
        // 改变主轴的方向
        flexDirection:'row',
        alignItems:'center'
    }
});

module.exports = HeaderCommonView;

