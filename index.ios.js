/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
var Main =require('./Component/Main/JMain');

export default class JaydenShop extends Component {
  render() {
    return (
      <Main/>
    );
  }
}
AppRegistry.registerComponent('JaydenShop', () => JaydenShop);
