import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

export default class IdeaText extends Component {
  render() {
    return (
      <Text
        style={{
          backgroundColor: '#000000',
          fontSize: 0.8,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: this.props.location }],
        }}>
        {this.props.text}
      </Text>
    );
  }
}
