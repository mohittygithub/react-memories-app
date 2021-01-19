import { CREATE, FETCH_FROM_SERVER } from "./actionTypes";

const initialState = [];

const memories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FROM_SERVER:
      return { state: [action.payload] };
    case CREATE:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
};

export default memories;
