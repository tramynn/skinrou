import Axios from "axios";

const initialState = {
  categories: [],
  routines: [],
  shouldRedirect: false
};

const GET_CATEGORIES = "GET_CATEGORIES";
const GET_ALL_ROUTINES = "GET_ALL_ROUTINES";
const GET_ROUTINES_BY_CATEGORIES = "GET_ROUTINES_BY_CATEGORIES";
const GET_AGE_ROUTINES = "GET_AGE_ROUTINES";
const GET_SKINTYPE_ROUTINES = "GET_SKINTYPE_ROUTINES";
const GET_USER_ROUTINES = "GET_USER_ROUTINES";
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

export function getAgeRoutines(age) {
  return {
    type: GET_AGE_ROUTINES,
    payload: Axios.get(`/api/routines/age/${age}`)
  };
}

export function getSkintypeRoutines(type) {
  return {
    type: GET_SKINTYPE_ROUTINES,
    payload: Axios.get(`/api/routines/skintype/${type}`)
  };
}

export function getUserRoutines(userId) {
  return {
    type: GET_USER_ROUTINES,
    payload: Axios.get(`/api/routines/profile/${userId}`)
  };
}

export function addRoutine(newRoutine) {
  return {
    type: ADD_ROUTINE,
    payload: Axios.post("/api/routines", newRoutine)
  };
}

export function editRoutine(routineId) {
  return {
    type: EDIT_ROUTINE,
    payload: Axios.put(`/api/routines/${routineId}`)
  };
}

export function deleteRoutine(routineId, userId) {
  return {
    type: DELETE_ROUTINE,
    payload: Axios.delete(`/api/routines/${routineId}/${userId}`)
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
        shouldRedirect: false,
        routines: payload.data
      };
    case `${GET_ROUTINES_BY_CATEGORIES}_FULFILLED`:
      return {
        ...state,
        routines: payload.data
      };
    case `${GET_AGE_ROUTINES}_FULFILLED`:
      return {
        ...state,
        routines: payload.data
      };
    case `${GET_SKINTYPE_ROUTINES}_FULFILLED`:
      return {
        ...state,
        routines: payload.data
      };
    case `${GET_USER_ROUTINES}_FULFILLED`:
      return {
        ...state,
        routines: payload.data
      };
    case `${ADD_ROUTINE}_FULFILLED`:
      return {
        ...state,
        shouldRedirect: true,
        routines: payload.data
      };
    case `${EDIT_ROUTINE}_FULFILLED`:
      return {
        ...state,
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
