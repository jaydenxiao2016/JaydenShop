/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var HomeDetail = require('./JHomeDetail');
var TopView = require('./JTopView');
var MiddleView = require('./JMiddleView');
var MiddleBottomView = require('./JMiddleBottomView');
var ShopCenterView = require('./JShopCenterView');
var ShopCenterDetail = require('./JShopCenterDetail');
var GuestYouLikeView = require('./JGuestYouLikeView');
var HotView = require('./JHotView');

var Home = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                {/*首页的导航条*/}
                {this.renderHomeHeader()}
                <ScrollView >
                    {/*顶部菜单*/}
                    <TopView/>
                    {/*中间部分*/}
                    <MiddleView/>
                    {/*中间下部分*/}
                    <MiddleBottomView popTopHome={(data) => this.pushToDetail(data)}/>
                    {/*购物中心*/}
                    <ShopCenterView  popToHomeView = {(url) => this.pushToShopCenterDetail(url)}/>
                    {/*热门频道*/}
                    <HotView/>
                    {/*猜你喜欢*/}
                    <GuestYouLikeView/>
                </ScrollView>
            </View>
        );
    },
    //首页顶标题
    renderHomeHeader(){
        return (
            <View style={styles.headerStyles}>
                {/*左边*/}
                <TouchableOpacity>
                    <Text style={styles.leftTitleStyles}>广州</Text>
                </TouchableOpacity>
                {/*中间*/}
                <TextInput multiline={false} underlineColorAndroid={'transparent'} style={styles.middleInputStyles}
                           placeholder="输入商家, 品类, 商圈"
                />
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    <TouchableOpacity>
                        <Image source={{uri: 'icon_homepage_message'}} style={styles.headerRightImageStyles}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={{uri: 'icon_homepage_scan'}} style={styles.headerRightImageStyles}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    },
    // 跳转到二级界面
    pushToDetail(data){
    },
    // 跳转到购物中心详情页
    pushToShopCenterDetail(url){
        this.props.navigator.push(
            {
                component: ShopCenterDetail, // 要跳转的版块
                passProps: {'url': this.dealWithUrl(url)}
            }
        );
    },

    // 处理URL
    dealWithUrl(url){
        return url.replace('imeituan://www.meituan.com/web/?url=', '');
    },

})
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    leftTitleStyles: {
        color: 'white',
        padding: 3,
        fontSize: 14
    },
    headerStyles: {
        height: 48,
        width: width,
        flexDirection: 'row',
        backgroundColor: 'rgba(255,96,0,1.0)',
        alignItems: 'center',
        // 设置主轴的对齐方式
        justifyContent: 'space-around'
    },
    middleInputStyles: {
        width: width * 0.70,
        height: 34,
        justifyContent: "center",
        alignItems: "center",
        color: 'gray',
        backgroundColor: "white",
        borderRadius: 18,
        paddingLeft: 10,
        fontSize: 12
    },
    rightViewStyle: {
        flexDirection: 'row',
        // 设置侧轴的对齐方式
        alignItems: 'center',
    },
    headerRightImageStyles: {
        width: 24,
        marginRight: 4,
        height: 24
    },
})
module.exports = Home;

