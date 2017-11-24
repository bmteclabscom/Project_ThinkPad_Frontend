

export function rootReducer(state = {}, action) {
  console.log(action)
  switch(action.type) {
    case 'TRIGGER' :
      console.log('TRIGGERED')
      return {...state}
    default:
      return {...state};
  }
}
