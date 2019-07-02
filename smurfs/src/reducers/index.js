/*
  Be sure to import in all of the action types from `../actions`
*/

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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
  ADD_SMURFS_START,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_FAILURE,
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  UPDATE_SMURFS_START,
  UPDATE_SMURFS_SUCCESS,
  UPDATE_SMURFS_FAILURE,
  DELETE_SMURFS_START,
  DELETE_SMURFS_SUCCESS,
  DELETE_SMURFS_FAILURE
} from '../actions';

const initialState = {
  smurfs: [],
  addingSmurfs: false,
  fetchingSmurfs: false,
  updatingSmurfs: false,
  deletingSmurfs: false,
  error: ""
}

export const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ""
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: ""
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    default:
      return state;
  }
}