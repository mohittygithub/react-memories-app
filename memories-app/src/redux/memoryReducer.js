import { CREATE, FETCH_FROM_SERVER, FETCH_ALL, DELETE } from "./actionTypes";

const initialState = {
  data: [],
};

const memories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FROM_SERVER:
      return { data: [action.payload] };

    case DELETE:
      return {
        ...state,
        data: [...state.data, action.id],
      };
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
