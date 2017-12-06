
//------------------Default State----------------------

defaultState = {
  ideaList: ['This is not the greatest Idea in the world, this is just a tribute.'], //List of ideas retrieved from backend api.
  selectedIdea: null //Idea which ∑as last selected by user.
}

//-----------------Reducer Function-----------------------
function ideaReducer(state = defaultState, action ) {
  switch(action.type) {
    case 'PRE_LOAD_IDEAS' :
      return { ...state, ideaList: [...action.payload]};
    case 'SELECT_IDEA' :
      return { ...state, selectedIdea: action.payload}
    default :
      return state;
  }
}

export default ideaReducer;
