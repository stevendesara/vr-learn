import React, { Component } from 'react';

import { View, AppRegistry, Pano, asset } from 'react-vr';

export default class Basics extends Component {
  render () {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')} />
      </View>
    );
  }
}

AppRegistry.registerComponent('Basics', () => Basics);
