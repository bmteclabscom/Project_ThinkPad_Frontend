import React, { Component } from 'react';
import { View, Text } from 'react-vr';
import IdeaText from './IdeaText.js';
import { ideas } from './IdeaSeed.js'
import { connect } from 'react-redux'
import { FADER } from '../redux/actions/ideas.js'

class IdeaContainer extends Component {

  handleClick = () => {console.log('test')}

  render(){
    console.log(this.handleClick)
    return(
      <View>
        <IdeaText
          text={`${ideas[Math.floor(Math.random()*ideas.length)]}`}
          location={[0,2,-8]}
          fader={this.props.fadeStart}
          onClick={this.onClick}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    fadeInit: state.ideas.fade
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fadeStart: (() => {dispatch(FADER())})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(IdeaContainer);
