import Axios from "axios";

const initialState = {
  categories: [],
  routines: []
};

const GET_CATEGORIES = "GET_CATEGORIES";
const GET_ALL_ROUTINES = "GET_ALL_ROUTINES";
const GET_ROUTINES_BY_CATEGORIES = "GET_ROUTINES_BY_CATEGORIES";
const GET_MY_ROUTINES = "GET_MY_ROUTINES";
const ADD_ROUTINE = "ADD_ROUTINE";
const EDIT_ROUTINE = "EDIT_ROUTINE";
const DELETE_ROUTINE = "DELETE_ROUTINE";

export function getCategories() {
  return {
    type: GET_CATEGORIES,
    payload: Axios.get("/api/categories")
  };
}

export function getAllRoutines() {
  return {
    type: GET_ALL_ROUTINES,
    payload: Axios.get("/api/routines")
  };
}

export function getRoutinesByCategories(categoryId) {
  return {
    type: GET_ROUTINES_BY_CATEGORIES,
    payload: Axios.get(`/api/routines/${categoryId}`)
  };
}

export function getMyRoutines(userId) {
  return {
    type: GET_MY_ROUTINES,
    payload: Axios.get(`/api/routines/${userId}`)
  };
}

export function addRoutine(newRoutine) {
  return {
    type: ADD_ROUTINE,
    payload: Axios.post("/api/routines", newRoutine)
  };
}

export function editRoutine(routineId, categoryId) {
  return {
    type: EDIT_ROUTINE,
    payload: Axios.put(`/api/routines/${routineId}/${categoryId}`)
  };
}

export function deleteRoutine(routineId, categoryId) {
  return {
    type: DELETE_ROUTINE,
    payload: Axios.delete(`/api/routines/${routineId}/${categoryId}`)
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_CATEGORIES}_FULFILLED`:
      return {
        ...state,
        categories: payload.data
      };
    case `${GET_ALL_ROUTINES}_FULFILLED`:
      return {
        ...state,
        routines: payload.data
      };
    case `${GET_ROUTINES_BY_CATEGORIES}_FULFILLED`:
      return {
        ...state,
        routines: payload.data
      };
    case `${GET_MY_ROUTINES}_FULFILLED`:
      return {
        ...state,
        routines: payload.data
      };
    case `${ADD_ROUTINE}_FULFILLED`:
      return {
        routines: payload.data
      };
    case `${EDIT_ROUTINE}_FULFILLED`:
      return {
        routines: payload.data
      };
    case `${DELETE_ROUTINE}_FULFILLED`:
      return {
        ...state,
        routines: payload.data
      };
    default:
      return state;
  }
}
