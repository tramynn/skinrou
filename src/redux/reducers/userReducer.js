import Axios from "axios";

const initialState = {
  userId: null,
  username: "",
  firstName: "",
  lastName: "",
  age: "",
  phoneNum: ""
};

const GET_SESSION = "GET_SESSION";
const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

export function getSession() {
  return {
    type: GET_SESSION,
    payload: Axios.get("/auth/user")
  };
}

export function registerUser() {
  return {
    type: REGISTER_USER,
    payload: Axios.post("/auth/register")
  };
}

export function login() {
  return {
    type: LOGIN_USER,
    payload: Axios.post("/auth/login")
  };
}

export function logout() {
  return {
    type: LOGOUT_USER,
    payload: Axios.post("/auth/logout")
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_SESSION}_FULFILLED`: {
      return {
        ...state,
        userId: payload.data.user_id,
        username: payload.data.username,
        firstName: payload.data.firstName,
        lastName: payload.data.lastName,
        age: payload.data.age,
        phoneNum: payload.data.phoneNum
      };
    }
    case `${REGISTER_USER}_FULFILLED`: {
      return {
        ...state,
        userId: payload.data.user_id,
        username: payload.data.username,
        firstName: payload.data.firstName,
        lastName: payload.data.lastName,
        age: payload.data.age,
        phoneNum: payload.data.phoneNum
      };
    }
    case `${LOGIN_USER}_FULFILLED`: {
      return {
        ...state,
        userId: payload.data.user_id,
        username: payload.data.username,
        firstName: payload.data.firstName,
        lastName: payload.data.lastName,
        age: payload.data.age,
        phoneNum: payload.data.phoneNum
      };
    }
    case `${LOGOUT_USER}_FULFILLED`: {
      return {
        ...state,
        userId: payload.data.user_id,
        username: payload.data.username,
        firstName: payload.data.firstName,
        lastName: payload.data.lastName,
        age: payload.data.age,
        phoneNum: payload.data.phoneNum
      };
    }
    default:
      return state;
  }
}
