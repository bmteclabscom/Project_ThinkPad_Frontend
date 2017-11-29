
//------------------Default State----------------------

defaultState = {
  ideaList: ['This is not the greatest Idea in the world, this is just a tribute.'], //List of ideas retrieved from backend api.
  currentlyRenderedIdeas: [], //Ideas which are currently displayed in idea component.
}

//-----------------Reducer Function-----------------------
function ideaReducer(state = defaultState, action ) {
  switch(action.type) {
    case 'PRE_LOAD_IDEAS' :
      return { ...state, ideaList: [...action.payload]};
    case 'ADD_IDEA' :
      return { ...state, ideaList: [...action.payload]}
    default :
      return state;
  }
}

export default ideaReducer;
