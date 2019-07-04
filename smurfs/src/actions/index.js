/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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

import axios from 'axios';

export const ADD_SMURFS_START = "ADD_SMURFS_START";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";
export const ADD_SMURFS_FAILURE = "ADD_SMURFS_FAILURE";
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const UPDATE_SMURFS_START = "UPDATE_SMURFS_START";
export const UPDATE_SMURFS_SUCCESS = "UPDATE_SMURFS_SUCCESS";
export const UPDATE_SMURFS_FAILURE = "UPDATE_SMURFS_FAILURE";
export const DELETE_SMURFS_START = "DELETE_SMURFS_START";
export const DELETE_SMURFS_SUCCESS = "DELETE_SMURFS_SUCCESS";
export const DELETE_SMURFS_FAILURE = "DELETE_SMURFS_FAILURE";

export const addSmurfs = (smurf) => dispatch => {
  dispatch({ type: ADD_SMURFS_START })
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_SMURFS_FAILURE, payload: err }));
}

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_SMURFS_FAILURE, payload: err }))
}

export const updateSmurfs = (smurf) => dispatch => {
  dispatch({ type: UPDATE_SMURFS_START })
  axios
    .put('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({ type: UPDATE_SMURFS_SUCCESS, payload: res }))
    .catch(err => dispatch({ type: UPDATE_SMURFS_FAILURE, payload: err }))
}

export const deleteSmurfs = (smurf) => dispatch => {
  dispatch({ type: DELETE_SMURFS_START })
  axios
    .delete('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({ type: DELETE_SMURFS_SUCCESS, payload: res }))
    .catch(err => dispatch({ type: DELETE_SMURFS_FAILURE, payload: err }))
}