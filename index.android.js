/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class carousel extends Component {
  render() {
    const url='https://ucarecdn.com/78aad411-bcda-48f4-86f5-440f32b1e4f6/-/crop/387x517/64,113/-/preview/';
    return (
      <View style={styles.container}>
        <Carousel ref={'carousel'} sliderWidth={387} itemWidth={387}>
          <Image source={{ uri: url }} style={{ width: 387, height: 517 }} />
          <Image source={{ uri: url }} style={{ width: 387, height: 517 }} />
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('carousel', () => carousel);
