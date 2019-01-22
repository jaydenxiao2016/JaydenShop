/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import {StyleSheet, View,TouchableOpacity,Text,Image} from "react-native";

// 导入外部的json数据
var Home_D4 = require('../../LocalData/XMG_Home_D4.json');
var HomeTopMiddle = require('../../LocalData/HomeTopMiddle.json');

// 引入外部的组件类
var CommonView = require('./JCommonView');

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var MiddleBottomView = React.createClass({
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
                {this.renderTopView()}
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomView()}
                </View>
            </View>
        );
    },
    renderTopView(){
        var topViewArr=[];
        //拿到数据
        var topViewData=HomeTopMiddle.data;
        for (var i=0;i<topViewData.length;i++){
            var itemData=topViewData[i];
            topViewArr.push(
                <TouchableOpacity key={i}>
                    <View style={styles.topViewStyle}>
                        {/*左边*/}
                        <View>
                            <Text style={{fontSize:20,color:'#ff9900',marginLeft:10}}>{itemData.title}</Text>
                            <Text style={{fontSize:15,color:'gray',marginLeft:10,marginTop:5}}>{itemData.subTitle}</Text>
                        </View>
                        {/*右边*/}
                        <Image source={{uri:itemData.image}} style={{width:width*0.5,height:80,resizeMode:'contain'}}/>
                    </View>
                </TouchableOpacity>
            )
        }
        return topViewArr;
    },
    renderBottomView(){
        var itemViewArr = [];
        // 拿到对应的数据
        var dataArr = Home_D4.data;
        for (var i = 0; i < dataArr.length; i++) {
            // 取出单独的数据
            var itemData = dataArr[i];
            itemViewArr.push(
                <CommonView
                    title={itemData.maintitle}
                    subTitle={itemData.deputytitle}
                    rightIcon={this.dealWithImgUrl(itemData.imageurl)}
                    titleColor={itemData.typeface_color}
                    tplurl={itemData.tplurl}
                    key={i}
                    callBackClickCell={(data) => this.popToTopView(data)}
                />
            )
        }
        return itemViewArr;
    },
    // 继续往父级界面传递数据
    popToTopView(data){
        // 继续执行回调函数
        if (this.props.popTopHome == null) return;
        this.props.popTopHome(data);
    },
    // 处理图像的尺寸
    dealWithImgUrl(url){
        if (url.search('w.h') == -1) { // 没有找到,正常返回
            return url;
        } else {
            return url.replace('w.h', '120.90');
        }
    }
})

const styles = StyleSheet.create({
    container: {
        marginTop:8
    },
    topViewStyle:{
        flexWrap:'wrap',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        justifyContent:'space-between',
        marginBottom:0.5,
    },
    bottomViewStyle: {
        // 设置主轴的方向
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

module.exports = MiddleBottomView;

