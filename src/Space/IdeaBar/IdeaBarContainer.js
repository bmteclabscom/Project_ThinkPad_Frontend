import React, { Component } from 'react';
import { View, Text, VrButton, Image } from 'react-vr';
import Minus from './Minus';
import Plus from './Plus'

class IdeaBarContainer extends Component {
  render(){
    return(
      <View>
        <Plus/>
        <Minus/>
      </View>
    )
  }
}

export default IdeaBarContainer;
