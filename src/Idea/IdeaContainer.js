//========== Imports ==========

  //---------- External Imports ----------
import React, { Component } from 'react';
import { View, Text, VrButton } from 'react-vr';
import { connect } from 'react-redux';

  //---------- Internal Imports ----------
import IdeaText from './IdeaText.js';
import BackendAPI from '../redux/services/BackendAPI.js';
import { PRE_LOAD_IDEAS } from '../redux/actions/ideaActions.js';


//========== IdeaContainer Component ==========

class IdeaContainer extends Component {

  //---------- Other Methods ----------
  mapIdeasContentToJSX(ideasObjArr) {
    newIdeas = [...ideasObjArr]
    ideasJSX = newIdeas.map((idea) => {return (<IdeaText
      text={idea.content}
      y={Math.random() * 30}
      z={Math.random() * -80}
    />)})
    return ideasJSX
  }

  //---------- Lifecycle Methods ----------
  componentDidMount(){
    this.props.preLoadIdeas()
  }

  render(){
    return(
      <View>
        {this.mapIdeasContentToJSX(this.props.ideaList)}
      </View>
    )
  }
}

//========== Redux Mapping ==========

function mapStateToProps(state) {
  return {
    ideaList: state.idea.ideaList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    preLoadIdeas: (() => {dispatch(PRE_LOAD_IDEAS())})
  }
}

//========== Exports ==========

export default connect(mapStateToProps,mapDispatchToProps)(IdeaContainer);










// add a set interval on the constructor
// text={`${ideas[Math.floor(Math.random()*ideas.length)]}`}
