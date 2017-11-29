import React, { Component } from 'react';
import { Animated } from 'react-vr'
import { Text, VrButton, View } from 'react-vr'

import { FADER } from '../redux/actions/ideaActions.js'

//------------------Idea Text Component---------------------

class IdeaText extends Component {

  state = {
    fadeAnim: new Animated.Value(0),
    panAnim: new Animated.Value(Math.random(10) * -1000)
  }

//------------------Other Methods---------------------
  log() {
    console.log('clicking name')
  }


//------------------LifeCycle Methods---------------------
  render() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 15000
      }
    ).start();

    Animated.timing(
      this.state.panAnim,
      {
        toValue: 4000,
        duration: 200000
      }
    ).start()

//------------------Return JSX---------------------

    return(
      <Animated.View style={{
        opacity: this.state.fadeAnim,
        transform: [{translateY: this.props.y },{translateX: this.state.panAnim},{translateZ: this.props.z}]
      }}>
        <VrButton onClick={this.log}>
          <Text
            style={{
              color: '#000000',
              fontSize: 1,
              fontWeight: '400',
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center'
            }}>
            {this.props.text}
          </Text>
        </VrButton>
      </Animated.View>
    )
  }
}

export default IdeaText;
