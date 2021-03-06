import Axios from "axios";

const initialState = {
  userId: null,
  username: "",
  firstName: "",
  lastName: "",
  age: "",
  phoneNum: "",
  url: ""
};

const GET_SESSION = "GET_SESSION";
const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const GET_PROFILE_PIC = "GET_PROFILE_PIC";
const ADD_PROFILE_PIC = "ADD_PROFILE_PIC";

export function getSession() {
  return {
    type: GET_SESSION,
    payload: Axios.get("/auth/user")
  };
}

export function registerUser(newUser) {
  return {
    type: REGISTER_USER,
    payload: Axios.post("/auth/register", newUser)
  };
}

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: Axios.post("/auth/login", user)
  };
}

export function logoutUser() {
  Axios.post("/auth/logout");
  return {
    type: LOGOUT_USER
  };
}

export function getProfPic() {
  return {
    type: GET_PROFILE_PIC,
    payload: Axios.get("/api/profile")
  };
}

export function addProfPic(newPic) {
  return {
    type: ADD_PROFILE_PIC,
    payload: Axios.post("/api/profile", newPic)
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
        phoneNum: payload.data.phoneNum,
        url: payload.data.url
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
    case LOGOUT_USER: {
      return {
        userId: null,
        username: "",
        firstName: "",
        lastName: "",
        age: "",
        phoneNum: ""
      };
    }
    case `${GET_PROFILE_PIC}_FULFILLED`: {
      return {
        ...state,
        url: payload.data.url
      };
    }
    case `${ADD_PROFILE_PIC}_FULFILLED`: {
      return {
        ...state,
        url: payload.data.url
      };
    }
    default:
      return state;
  }
}
