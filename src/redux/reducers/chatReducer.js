const initialState = {
  general: [],
  typeTopic: [],
  skinTopic: []
};

const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export function receiveMessage() {
  return {
    type: RECEIVE_MESSAGE
  };
}

export default function reducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case `${RECEIVE_MESSAGE}_FULFILLED`: {
      return {
        ...state,
        general: payload
      };
    }
    default:
      return state;
  }
}
