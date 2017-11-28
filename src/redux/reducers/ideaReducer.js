defaultState = {
  ideaList: [], //Make backend API request for Ideas
  renderedIdeas: [], //Ideas which are currently displayed in space
  renderedIdeaCount: 0, //Integer representation of currently rendered ideas.
  nextIdea: null //following idea to be rendered on page.
}

function ideaReducer(state = defaultState, action ) {
  switch(action.type) {
    //retrieveIdeaList
    //getIdeaCount
    //getListOfRenderedIdeas
    //GetNextIdea
    default :
      return state;
  }
}

export default ideaReducer;
