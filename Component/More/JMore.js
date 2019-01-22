/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {StyleSheet,Text,View,TouchableOpacity,Image,Platform,ScrollView} from "react-native";

var CommonCell=require('./JCommonCell');
var More=React.createClass({
    render(){
        return (
            <View style={styles.container}>
                {/*标题*/}
                {this.renderNavBar()}
                <ScrollView>
                    <View style={{marginTop:15}}>
                        <CommonCell title="扫一扫" />
                    </View>

                    <View style={{marginTop:15}}>
                        <CommonCell
                            title="省流量模式"
                            isSwitch={true}
                        />
                        <CommonCell
                            title="消息提醒"
                        />
                        <CommonCell
                            title="邀请好友使用码团"
                        />
                        <CommonCell
                            title="清空缓存"
                            rightTitle="1.99M"
                        />
                    </View>

                    <View style={{marginTop:15}}>
                        <CommonCell
                            title="问卷调查"
                        />
                        <CommonCell
                            title="支付帮助"
                        />
                        <CommonCell
                            title="网络诊断"
                        />
                        <CommonCell
                            title="关于码团"
                        />
                        <CommonCell
                            title="我要应聘"
                        />
                    </View>

                    <View style={{marginTop:15,marginBottom:15}}>
                        <CommonCell
                            title="精品应用"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    },
    renderNavBar(){
        return<View style={styles.headerStyles}>
            <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>更多</Text>
            <TouchableOpacity style={styles.headerRightStyles}>
                <Image source={{uri:'icon_mine_setting'}} style={styles.headerRightImageStyles}/>
            </TouchableOpacity>
        </View>
    }
})

const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#e8e8e8',
    },
    headerStyles:{
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',
        justifyContent:'center',
        alignItems:'center'
    },
    headerRightStyles:{
        position:'absolute',
        right:10,
        alignItems:"center",
        justifyContent:'center',
    },
    headerRightImageStyles:{
        width:Platform.OS == 'ios' ? 28: 24,
        height:Platform.OS == 'ios' ? 28: 24,
    }
})

module.exports=More;

