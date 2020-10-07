import { types } from "./types";


export const addFunction = (data) => (dispatch) => {
    dispatch({
      type: types.ADD_TYPE,
      plus: data,
    });
};
export const deleteFunction = (data) => (dispatch) => {
    dispatch({
        type: types.DELETE_TYPE,
        eliminate: data
    })
}

export const doneFunction = (data) => (dispatch) => {
  dispatch({
      type: types.DONE_TYPE,
      done: data 
  })
}

