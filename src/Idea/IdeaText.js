import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, Animated } from 'react-vr';

export default class IdeaText extends Component {
  render() {
    return (
        <Text
          style={{
            color: '#000000',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: this.props.location },{ scale : .5 },{rotateX : 0},{rotateY : 3}]
          }}>
          {this.props.text}
        </Text>
    );
  }
}

{matrix : [0.01,0,0,0, 0,0.01,0,0, 0,0,0.1,0, 3,2,0,1]}
{scale : [0.01, 0.02, 0.03]}
