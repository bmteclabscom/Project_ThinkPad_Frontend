import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, Animated } from 'react-vr';
import { connect } from 'react-redux';
import { FADE } from '../redux/actions/ideaActions.js';
import IdeaContainer from '../Idea/IdeaContainer.js';
import IdeaBarContainer from './IdeaBar/IdeaBarContainer.js';


class SpaceContainer extends Component {

//infinit loop
//create empty array
//append item to array
//set timeout



  render(){
    return(
      <View>
        <IdeaContainer/>
        <IdeaBarContainer/>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}


function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceContainer);
