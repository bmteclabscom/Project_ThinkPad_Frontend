//========== Imports ==========

  //---------- External Imports ----------
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, VrButton, View, Animated, Scene, Model, asset } from 'react-vr';

  //---------- Internal Imports ----------
import { SELECT_IDEA } from '../redux/actions/ideaActions.js'
//------------------Idea Text Component---------------------

class IdeaText extends Component {

  state = {
    x: new Animated.Value(this.randomInt(-2000, 0)),
    y: new Animated.Value(this.randomInt(0,10)),
    z: new Animated.Value(this.randomInt(-15,-25)),
    camX: new Animated.Value(0),
    camY: new Animated.Value(0),
    camZ: new Animated.Value(0),
    opacity: new Animated.Value(0),
    lastPicked: false

  }
//------------------Other Methods---------------------
  handleClick = () => {
    this.props.selectIdea(this.props.id);
    this.state.lastPicked ? false : true;
  }

  randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//------------------LifeCycle Methods---------------------
  render() {
    console.log(this.state.camX._value)
    console.log(this.props)
    if(this.props.id !== this.props.selectedIdea) {

      Animated.timing(
        this.state.y,
        {
          toValue: 20 ,
          duration: 1000
        }
      ).start();

      Animated.timing(
        this.state.opacity,
        {
          toValue: 1,
          duration: 15000
        }
      ).start();

      Animated.timing(
        this.state.x,
        {
          toValue: 4000,
          duration: 350000
        }
      ).start()} else {

    Animated.sequence([
      Animated.timing(
        this.state.x,
          {
            toValue: -10,
            duration: 1000
          }
        ),
      Animated.timing(
        this.state.y,
          {
          toValue: 0,
          duration: 1000
          }
        ),
      Animated.timing(
        this.state.z,
          {
            toValue: -15,
            duration: 1000
          }
        )
      ]).start();
    }
//------------------Return JSX---------------------
    return(
      <Animated.View style={{
        maxWidth: '70em',
        opacity: this.state.opacity,
        position: 'absolute',
        transform: [{translateY: this.state.y },{translateX: this.state.x},{translateZ: this.state.z}]
      }}>
      <Scene style={{
        transform: [{translate: [this.state.camX._value, this.state.camY._value, this.state.camZ._value]}]
        // transform: [{translate: [4.3, 3.3, 2.3]}]
      }}/>
      <VrButton onClick={this.handleClick}>


        <Text
          style={{
            flexDirection: 'row',
            color: '#000000',
            fontSize: 1,
            fontWeight: '400'
        }}>
          {this.props.text}
        </Text>
        <Model
          style={{
            transform: [{translateX: -1},{translateY: -1.1 }]
          }}
          source={{
            obj: asset('cloud.obj'),
            mtl: asset('cloud.mtl'),
          }}
          lit={true}
        />

      </VrButton>
    </Animated.View>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedIdea: state.idea.selectedIdea
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectIdea: ((id) => {dispatch(SELECT_IDEA(id))})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaText);
