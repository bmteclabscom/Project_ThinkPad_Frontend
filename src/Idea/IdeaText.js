import React, { Component } from 'react';
import { Animated } from 'react-vr'
import { Text, VrButton, View } from 'react-vr'
import { FADER } from '../redux/actions/ideas.js'

class IdeaText extends Component {

  state = {
    fadeAnim: new Animated.Value(0),
    panAnim: new Animated.Value(-20)
  }

  log() {
    console.log('aefaef')
  }

  // componentDidMount(){
  //   Animated.timing(
  //     this.state.fadeAnim,
  //     {toValue: 1}
  //   ).start();
  //   Animated.timing(
  //     this.state.panAnim,
  //     {toValue:5}
  //   ).start();
  // }

  render() {

    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 10000
      }
    ).start();

    Animated.timing(
      this.state.panAnim,
      {
        toValue: 20,
        duration: 100000
      }
    ).start()

    return(
      <Animated.View>
        <VrButton onClick={this.log} width={100}>
          <Animated.Text
            style={{
              position: 'absolute',
              opacity: this.state.fadeAnim,
              color: '#000000',
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translateY: 0},{translateX: this.state.panAnim},{translateZ:-10}]
            }}>
            {this.props.text}
          </Animated.Text>
        </VrButton>
      </Animated.View>


    )
  }
}

export default IdeaText;
