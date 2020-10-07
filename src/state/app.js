import { types } from "../actions/types";
const initialState = {
  add: {},
  delete: false
};

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_TYPE:
      console.log(action.plus);
      action.plus.id = Math.floor(Math.random() * 100)
      action.plus.done = false  
      return [...state, action.plus] 
    case types.DELETE_TYPE:
      var filter = state.filter((element)=> {
        if (action.eliminate !== element.id) { return element } 
      })
      state = filter;
      return [...state];
    case types.DONE_TYPE:
      var filter = state.map((element)=> {
        if (action.done === element.id) { element.done = !element.done } 
        return element
      })
      state = filter
      return [...state];
    default:
      return state;
  }
};