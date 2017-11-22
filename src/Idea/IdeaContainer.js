import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import IdeaText from './IdeaText.js'


export default class IdeaContainer extends Component {
  render() {
    return (
      <View>
      <IdeaText text='Is a Matriarchy better than a Patriarchy?' location={[1,3,-9]}/>
      <IdeaText text='Is homosexuality a choice or a genetic inheritance' location={[3,3,-12]}/>
      <IdeaText text='I think politicians are corrupt' location={[6,3,-8]}/>
      <IdeaText text='Social media destroys lives' location={[9,3,-7]}/>
      <IdeaText text='Cats are much cuter than dogs' location={[12,3,-6]}/>
      <IdeaText text='aefafeafe' location={[-1,3,-12]}/>
      <IdeaText text='aefaef' location={[-3,3,-12]}/>
      <IdeaText text='aefaefaef' location={[-6,3,-12]}/>
    </View>

    );
  }
}
