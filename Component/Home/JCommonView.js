/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var CommonView = React.createClass({
    getDefaultProps(){
        return {
            title: '',
            subTitle: '',
            rightIcon: '',
            titleColor: '',
            tplurl: '', //下级界面的URL路径
            // 回调函数
            callBackClickCell: null
        }
    },
    render(){
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.clickCell(this.props.tplurl)}>
                {/*左边*/}
                <View>
                    <Text style={[{color: this.props.titleColor}, styles.titleStyle]}>{this.props.title}</Text>
                    <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                </View>
                {/*右边*/}
                <Image source={{uri: this.props.rightIcon}} style={{width: 55, height:55, resizeMode: 'contain'}}/>
            </TouchableOpacity>
        );
    },
    // 点击了cell
    clickCell(data){
        // 判断处理
        if (this.props.callBackClickCell == null) return;
        // 执行回调函数
        this.props.callBackClickCell(data);
    }
})
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: width * 0.5 - 1,
        height: 59,
        marginBottom: 0.5,
        marginRight: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center'
    },
    indicatorViewStyle: {
        // 改变主轴的方向
        flexDirection: 'row',
        // 水平居中
        justifyContent: 'center'
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    subTitleStyle: {
        color: 'gray'
    }
});

module.exports = CommonView;

