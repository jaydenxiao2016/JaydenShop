/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import {Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
var CommonMyCell = require('./JCommonMyCell');
var HeaderView = require('./JMyHeaderView');
var MyMiddleView = require('./JMyMiddleView');

var Mine = React.createClass({
    render(){
        return (
            <View>
                {/*标题*/}
                {this.renderHeader()}
                <ScrollView>
                   <HeaderView/>
                    <View >
                        <CommonMyCell
                            leftIconName="collect"
                            leftTitle="我的订单"
                            rightTitle="查看全部订单"
                        />
                        <MyMiddleView/>
                    </View>

                    <View style={{marginTop: 20}}>
                        <CommonMyCell
                            leftIconName="draft"
                            leftTitle="钱包"
                            rightTitle="账户余额:¥100"
                        />

                        <CommonMyCell
                            leftIconName="like"
                            leftTitle="抵用券"
                            rightTitle="10张"
                        />
                    </View>


                    <View style={{marginTop: 20}}>
                        <CommonMyCell
                            leftIconName="card"
                            leftTitle="积分商城"
                        />
                    </View>

                    <View style={{marginTop: 20}}>
                        <CommonMyCell
                            leftIconName="new_friend"
                            leftTitle="今日推荐"
                            rightIconName="me_new"
                        />
                    </View>

                    <View style={{marginTop: 20}}>
                        <CommonMyCell
                            leftIconName="pay"
                            leftTitle="我要合作"
                            rightTitle="轻松开店,招财进宝"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    },
    renderHeader(){
        return <View style={styles.headerStyles}>
            <TouchableOpacity >
                <Image source={{uri: 'icon_message'}} style={styles.headerImageStyles}/>
            </TouchableOpacity>
            <TouchableOpacity >
                <Image source={{uri: 'icon_mine_setting'}} style={styles.headerImageStyles}/>
            </TouchableOpacity>
        </View>
    }

})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    headerStyles: {
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor: 'rgba(255,96,0,1.0)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerImageStyles: {
        width: Platform.OS == 'ios' ? 28 : 24,
        height: Platform.OS == 'ios' ? 28 : 24,
        marginLeft: 10,
        marginRight: 10,
    }
})
module.exports = Mine;

