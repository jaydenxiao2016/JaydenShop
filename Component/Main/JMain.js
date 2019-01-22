/**
 * Created by hisign on 2017/5/16.
 */
import React from "react";
import {Image, Platform, StyleSheet} from "react-native";
import {Navigator} from "react-native-deprecated-custom-components";
/**--------导入外部组件--------**/
import TabNavigator from "react-native-tab-navigator";

var Home = require('../Home/JHome');
var Shop = require('../Shop/JShop');
var Mine = require('../Mine/JMine');
var More = require('../More/JMore');

var Main = React.createClass({
    getInitialState(){
        return ({
            selectedTab: 'home'
        })
    },
    render(){
        return (
            <TabNavigator>
                {/*--首页--*/}
                {this.renderTabBarItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', 'home', '首页', Home)}
                {/*--商家--*/}
                {this.renderTabBarItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', 'shop', '商家', Shop)}
                {/*--我的--*/}
                {this.renderTabBarItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', 'mine', '我的', Mine)}
                {/*--更多--*/}
                {this.renderTabBarItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', 'more', '更多', More)}
            </TabNavigator>
        );
    },
    /**
     * 每一个tab
     * @param title
     * @param iconName
     * @param selectedIconName
     * @param selectedTab
     * @param componentName
     * @param component
     * @param badgeText
     * @returns {XML}
     */
    renderTabBarItem(title, iconName, selectedIconName, selectedTab, componentName, component, badgeText){
        return <TabNavigator.Item
            title={title}  // 传递变量,一定要加{}
            renderIcon={() => <Image source={{uri: iconName}} style={styles.iconStyle}/>} // 图标
            renderSelectedIcon={() => <Image source={{uri: selectedIconName}}
                                             style={styles.iconStyle}/>}   // 选中的图标
            onPress={() => {
                this.setState({selectedTab: selectedTab})
            }}
            selected={this.state.selectedTab === selectedTab}
            selectedTitleStyle={styles.selectedTitleStyle}
            badgeText={badgeText}
        >
            <Navigator
                initialRoute={{name: title, component: component}}
                configureScene={() => {// 过渡动画
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={this.props.navigator}/>;
                }}
            />
        </TabNavigator.Item>;
    }

})


var styles = StyleSheet.create({
    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    },
    selectedTitleStyle: {
        color: 'orange'
    }
})
module.exports = Main;