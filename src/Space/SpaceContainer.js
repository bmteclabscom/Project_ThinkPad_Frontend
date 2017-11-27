import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, Animated } from 'react-vr';
import { connect } from 'react-redux';
import { FADE } from '../redux/actions/ideas.js';
import IdeaContainer from '../Idea/IdeaContainer.js';



class SpaceContainer extends Component {

  render(){
    return(
      <View>
        <IdeaContainer/>
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
