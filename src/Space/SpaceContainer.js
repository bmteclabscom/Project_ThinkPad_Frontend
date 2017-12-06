//========== Imports ==========

  //---------- External Imports ----------
import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, Animated, DirectionalLight } from 'react-vr';
import { connect } from 'react-redux';

  //---------- Internal Imports ----------
import { FADE } from '../redux/actions/ideaActions.js';
import IdeaContainer from '../Idea/IdeaContainer.js';
import IdeaBarContainer from './IdeaBar/IdeaBarContainer.js';

//========== SpaceContainer Component ==========

class SpaceContainer extends Component {

  //---------- Lifecycle Methods ----------
  render(){
    return(
      <View>
        <DirectionalLight billboarding='on' style={{ transform: [{translateY: -2000},{translateX: 500}]}} intensity={1.3}/>
        <IdeaContainer/>
        <IdeaBarContainer/>
      </View>
    )
  }
}

//========== Redux Mapping ==========

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

//========== Exports ==========

export default connect(mapStateToProps, mapDispatchToProps)(SpaceContainer);
