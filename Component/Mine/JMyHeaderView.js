/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
var HeaderView = React.createClass({
    render(){
        return (
            <TouchableOpacity style={styles.container}>
                {/*上部分*/}
                {this.renderTopView()}
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomView()}
                </View>
            </TouchableOpacity>
        );
    },
    renderTopView(){
        return <View style={styles.topViewStyle}>
            <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:10}}>
                <Image source={{uri: 'kebi'}} style={styles.leftIconStyle}/>
                <Text style={styles.leftTextStyles}>Jayden电商</Text>
                <Image source={{uri: 'avatar_vip'}} style={{width: 17, height: 17}}/>
            </View>
            {/*--右边的箭头--*/}
            <Image source={{uri: 'icon_cell_rightArrow'}}
                   style={{width: 8, height: 13,marginRight:10}}/>
        </View>
    },
    renderBottomView(){
        let itemArr = [];
        let data = [{'number': '100', 'title': '码哥券'}, {'number': '12', 'title': '评价'}, {
            'number': '50',
            'title': '收藏'
        }];
        for (var i = 0; i < data.length; i++) {
            // 取出单独的数据
            let item = data[i];
            itemArr.push(
                <TouchableOpacity key={i}>
                    <View style={styles.bottomInnerViewStyle}>
                        <Text style={{color: 'white'}}>{item.number}</Text>
                        <Text style={{color: 'white'}}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return itemArr;
    }
})

const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: 'rgba(255,96,0,1.0)'
    },
    topViewStyle: {
        flexDirection: 'row',
        // 设置侧轴的对齐方式
        alignItems: 'center',
        marginTop:16,
        // 设置主轴的对齐方式
        justifyContent: 'space-between'
    },
    leftIconStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 3,
        borderColor: 'rgba(0,0,0,0.2)'
    },
    leftTextStyles: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        padding: 5
    },
    bottomInnerViewStyle: {
        width: (width / 3) + 1,
        height: 45,
        backgroundColor: 'rgba(255,255,255,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: 'white'
    },
    bottomViewStyle: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0
    }
})
module.exports = HeaderView;

