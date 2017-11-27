import React, { Component } from 'react';
import { Animated } from 'react-vr'
import { Text } from 'react-vr'

class IdeaText extends Component {

  render() {
    return(
      <Text
        style={{
          opacity: .3,
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
    )
  }
}

export default IdeaText;
