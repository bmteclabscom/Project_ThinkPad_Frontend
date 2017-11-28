import React, { Component } from 'react';
import { View, Text, VrButton } from 'react-vr';
import IdeaText from './IdeaText.js';
import { ideas } from './IdeaSeed.js'
import { connect } from 'react-redux'


class IdeaContainer extends Component {

  render(){
    return(
      <View>
          <IdeaText
            text={`${ideas[Math.floor(Math.random()*ideas.length)]}`}
            location={[0,2,-8]}
          />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    ideaList: state.ideaList,
    renderedIdeas: state.renderedIdeas,
    renderedIdeaCount: state.renderedIdeaCount,
    nextIdea: state.nextIdea
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(IdeaContainer);
