/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry} from "react-native";
import {Navigator} from "react-native-deprecated-custom-components";

var JLaunchImage = require('./Component/Main/JLaunchImage');

export default class JaydenShop extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: '启动页', component: JLaunchImage}}
                configureScene={() => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                }}
            />
        );
    }
}
AppRegistry.registerComponent('JaydenShop', () => JaydenShop);
