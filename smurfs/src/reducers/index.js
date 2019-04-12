/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_SMURFS,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_SMURF,
  ADD_SUCCESS,
  ADD_FAIL,
  DELETE_SMURF,
  DEL_SUCCESS,
  DEL_FAIL
} from '../actions';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   fetchSucess: false,
   fetchFailed: false,
   addingSmurf: false,
   addSuccess: false,
   addFail: false,
   deletingSmurf: false,
   delSuccess: false,
   delFail: false,
   error: null
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        fetchingSmurfs: !state.fetchingSmurfs
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchSucess: !state.fetchSucess
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchFailed: !state.fetchFailed
      };
    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: !state.addingSmurf
      };
    case ADD_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        addSuccess: !state.addSuccess
      }
    case ADD_FAIL:
      return {
        ...state,
        error: action.payload,
        addFail: !state.addFail
      }
    case DELETE_SMURF:
      return {
        ...state,
        deletingSmurf: !state.deletingSmurf
      }
    case DEL_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        delSuccess: !state.delSuccess
      }
    case DEL_FAIL:
      return {
        ...state,
        error: action.payload,
        delFail: !state.delFail
      }
  default: return state;
  }
}
export default rootReducer;
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
