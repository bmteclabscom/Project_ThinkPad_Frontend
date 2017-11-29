import React, { Component } from 'react';
import { View, Text, VrButton } from 'react-vr';
import { connect } from 'react-redux';

import IdeaText from './IdeaText.js';
import BackendAPI from '../redux/services/BackendAPI.js';
import { PRE_LOAD_IDEAS } from '../redux/actions/ideaActions.js';


//------------------IdeaContainer Component---------------------
class IdeaContainer extends Component {

  //------------------Other Methods---------------------

  extractIdeaContents(ideas) {
    return ideas.map(() => { return ideas.content })
  }

  mapIdeasToJSX(ideasArr) {
    newIdeas = [...ideasArr]
    console.log(newIdeas)
    ideaJSX = newIdeas.map((idea) => {return (<IdeaText
      text={idea.content}
      y={400}
      z={Math.random(10) * -100}
    />)})
    return ideaJSX
  }

  //------------------Lifecycle Methods---------------------

  componentDidMount(){
    this.props.preLoadIdeas()

  }

  render(){

    return(
      <View>
        {this.mapIdeasToJSX(this.props.ideaList)}
      </View>
    )
  }
}

//------------------Redux Mapping---------------------

function mapStateToProps(state) {
  // console.log(state)
  return {
    ideaList: state.idea.ideaList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    preLoadIdeas: (() => {dispatch(PRE_LOAD_IDEAS())})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(IdeaContainer);










// add a set interval on the constructor
// text={`${ideas[Math.floor(Math.random()*ideas.length)]}`}
