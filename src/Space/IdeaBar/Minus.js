import React, { Component } from 'react';
import { View, Text, VrButton, Image } from 'react-vr';

class Minus extends Component {
  render(){
    return(
      <View>
        <Image
          source={require('../../../static_assets/icon.png')}
          style={{
            transform: [{translateY: 0 },{translateX: 0},{translateZ: -3}],
            height: '100px',
            width: '200px'
          }}
        />
        <Text style={{transform: [{translateY: 0 },{translateX: 0},{translateZ: -3}]}}>aefaef</Text>
      </View>
    )
  }
}

export default Minus;
