import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import { connect } from 'react-redux';
import { TRIGGER } from '../redux/actions/ideas.js'

class SpaceContainer extends Component {

  trigger = () => {
    this.props.setTrigger()
  }

  render(){
    this.trigger()
    return(
      <View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    space: state.space
  }
}


function mapDispatchToProps(dispatch) {
  return {
    setTrigger: () => {dispatch(TRIGGER())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceContainer);
