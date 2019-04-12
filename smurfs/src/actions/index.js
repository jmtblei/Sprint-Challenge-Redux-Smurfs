/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCH_SMURFS = 'FETCH SMURFS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAIL = 'ADD_FAIL';
export const DELETE_SMURF = 'DELETE_SMURF';
export const DEL_SUCCESS = 'DEL_SUCCESS';
export const DEL_FAIL = 'DEL_FAIL';

export const fetchData = () => dispatch => {
  dispatch({
    type: FETCH_SMURFS
  })
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_FAIL,
        payload: err.response
      })
    })
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({
    type: ADD_SMURF
  })
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      dispatch({
        type: ADD_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: ADD_FAIL,
        payload: err.response
      })
    })
};

export const deleteSmurf = id => dispatch => {
  dispatch({
    type: DELETE_SMURF
  })
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({
        type: DEL_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: DEL_FAIL,
        payload: err.respons
      })
    })
}

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
