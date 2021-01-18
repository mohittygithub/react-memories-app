import { CREATE, FETCH_FROM_SERVER } from "./actionTypes";

const initialState = {
  data: [],
};

const memories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FROM_SERVER:
      return { ...state, data: [action.payload] };
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
