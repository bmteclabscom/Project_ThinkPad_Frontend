

const defaultState = {
  ideas: {
    fade: 0 
  }
}

export function rootReducer(state = defaultState, action) {
  switch(action.type){
    case 'FADER' :
      console.log('FADED')
      return {...state}
    default:
      return {...state};
  }
}

//Reducers should set default state,
//

//Fader should go in an idea reducer, but I am putting it in the root reducer for now, to simply ensure functionality.
