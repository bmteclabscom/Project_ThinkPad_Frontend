 //========== Imports ==========

  //---------- External Imports ----------
import React, { Component } from 'react';
import { View, Text, VrButton } from 'react-vr';
import { connect } from 'react-redux';

  //---------- Internal Imports ----------
import IdeaText from './IdeaText.js';
import BackendAPI from '../redux/services/BackendAPI.js';
import { PRE_LOAD_IDEAS, SELECT_IDEA } from '../redux/actions/ideaActions.js';


//========== IdeaContainer Component ==========

class IdeaContainer extends Component {

  //---------- Other Methods ----------
  getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  mapIdeasContentToJSX(ideasObjArr) {
    newIdeas = [...ideasObjArr]
    ideasJSX = newIdeas.map((idea) => {return (<IdeaText
      text={idea.content}
      key={idea.id}
      id={idea.id}
      y={this.getRandomIntInclusive(-10, 10)}
      z={this.getRandomIntInclusive(-15, -20)}
      selector={this.props.selectIdea}
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
    preLoadIdeas: (() => {dispatch(PRE_LOAD_IDEAS())}),
    selectIdea: ((id) => {dispatch(SELECT_IDEA(id))})
  }
}

//========== Exports ==========

export default connect(mapStateToProps,mapDispatchToProps)(IdeaContainer);
