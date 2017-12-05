import React, { Component } from 'react';
import { View, Text, VrButton, Image } from 'react-vr';

class Minus extends Component {
  render(){
    return(
      <View>
        <Image
          source={require('../../../static_assets/icon.png')}
          style={{
            transform: [{translateY: -0.1 },{translateX: 0},{translateZ: -1}],
            height: '25px',
            width: '60px'
          }}
          />
      </View>
    )
  }
}

export default Minus;
