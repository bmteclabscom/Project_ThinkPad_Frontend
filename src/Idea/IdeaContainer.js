import React, { Component } from 'react';
import { View, Text, VrButton } from 'react-vr';
import { connect } from 'react-redux'

import IdeaText from './IdeaText.js';
import { PRE_LOAD_IDEAS } from '../redux/actions/ideas.js';


//------------------IdeaContainer Component---------------------
class IdeaContainer extends Component {

  //------------------Other Methods---------------------

  mapIdeasToJSX(ideas) {
    newIdeas = [...ideas]
    ideaJSX = newIdeas.map((idea) => {return (<IdeaText
      text={idea}
      y={Math.random() * 40}
      z={Math.random(10) * -100}
    />)})
    return ideaJSX
  }

  generateText() {
    setTimeout(function(){ alert("Hello"); }, 3000);
  }
  //------------------Lifecycle Methods---------------------

  componentDidMount(){
    this.props.preLoadIdeas()

  }

  render(){
    console.log(this)
    return(
      <View>
        {
          this.mapIdeasToJSX(this.props.ideaList)
        }
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



















// text={`${ideas[Math.floor(Math.random()*ideas.length)]}`}
