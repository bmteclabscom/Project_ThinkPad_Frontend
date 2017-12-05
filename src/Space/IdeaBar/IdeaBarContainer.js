import React, { Component } from 'react';
import { View, Text, VrButton, Image } from 'react-vr';
import Minus from './Minus';
import Plus from './Plus';
import Fixed from './Fixed.js';

class IdeaBarContainer extends Component {
  render(){
    return(
      <Fixed>
        <View style={{
          flexDirection: 'row',
          right: '50%',
          bottom: '20%'
        }}>
          <Plus/>
          <Minus/>
        </View>
      </Fixed>

    )
  }
}

export default IdeaBarContainer;
