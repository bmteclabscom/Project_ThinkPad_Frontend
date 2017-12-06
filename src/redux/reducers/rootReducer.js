import { Animated } from 'react-vr';
import { combineReducers } from 'redux';
import ideaReducer from './ideaReducer';

const rootReducer = combineReducers({
  idea: ideaReducer
})

export { rootReducer };
