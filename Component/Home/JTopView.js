/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
// 引入外部的json数据
var TopMenu = require('../../LocalData/TopMenu.json');
var TopListView = require('./JTopListView');

var TopView = React.createClass({
    getInitialState(){
        return {
            activePage: 0
        }
    },
    render(){
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={this.onScrollAnimationEnd}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },
    renderScrollItem(){
        // 组件数组
        var itemArr = [];
        // 颜色数组 ---> 数据数组
        var dataArr = TopMenu.data;
        // 遍历创建组件
        for (var i = 0; i < dataArr.length; i++) {
            itemArr.push(
                <TopListView key={i}
                             dataArr={dataArr[i]}
                />
            );
        }
        // 返回组件数组
        return itemArr;
    },
    renderIndicator(){
        // 指示器数组
        var indicatorArr = [], style;
        // 遍历创建组件
        for (var i = 0; i < 2; i++) {
            // 设置圆点的样式
            style = (i === this.state.activePage) ? {color: 'orange'} : {color: 'gray'}
            indicatorArr.push(
                <Text key={i} style={[{fontSize: 25}, style]}>&bull;</Text>
            );
        }
        // 返回数组
        return indicatorArr;
    },
    /**
     * 监听scrollview滑动
     * @param e
     */
    onScrollAnimationEnd(e){
        var page = Math.floor(e.nativeEvent.contentOffset.x / width);
        this.setState({
            activePage: page,
        });
    }
})
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    indicatorViewStyle: {
        // 改变主轴的方向
        flexDirection: 'row',
        // 水平居中
        justifyContent: 'center'
    }
});

module.exports = TopView;

