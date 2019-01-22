/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import {StyleSheet,Image, Switch, Text, TouchableOpacity, View} from "react-native";

var CommonCell = React.createClass({
    getDefaultProps(){
        return {
            title: '',  // 标题
            isSwitch: false, // 是否展示开关
            rightTitle: ''
        }
    },
    getInitialState(){
        return {
            isOn: false
        }
    },
    render(){
        return (
            <TouchableOpacity activeOpacity={0.5} style={styles.container}>
                {/*左边*/}
                <Text style={{marginLeft: 8}}>{this.props.title}</Text>
                {/*右边*/}
                {this.renderRightView()}
            </TouchableOpacity>
        );
    },
    /**
     * 右边view内容
     */
    renderRightView(){
        // 判断
        if (this.props.isSwitch) { // true
            return (
                <Switch value={this.state.isOn == true} onValueChange={() => {
                    this.setState({isOn: !this.state.isOn})
                }} style={{marginRight: 8}}/>
            )
        } else {
            return (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {this.rightTitle()}
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={{width: 8, height: 13, marginRight: 8}}/>
                </View>
            )
        }
    },
    rightTitle(){
        if(this.props.rightTitle.length > 0){
            return(
                <Text style={{color:'gray', marginRight:5}}>{this.props.rightTitle}</Text>
            )
        }
    }
})

const styles = StyleSheet.create({
    container: {
        height: 40,
        backgroundColor: 'white',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.5,

        flexDirection: 'row',
        // 主轴的对齐方式
        justifyContent: 'space-between',
        // 垂直居中
        alignItems: 'center'
    }
});
module.exports = CommonCell;

