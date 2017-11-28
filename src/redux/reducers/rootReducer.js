import { Animated } from 'react-vr';
import { combineReducers } from 'redux';
import ideaReducer from './ideaReducer';


console.log(ideaReducer)

const rootReducer = combineReducers({
  idea: ideaReducer
})

export { rootReducer };

// export function rootReducer(state = defaultState, action) {
//   switch(action.type){
//     case 'FADER' :
//       console.log('FADED')
//       return {...state}
//     default:
//       return {...state};
//   }
// }
