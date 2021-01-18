import axios from "axios";
import { CREATE, FETCH_FROM_SERVER, FETCH_ALL, DELETE } from "./actionTypes";

const initialState = {
  data: [],
};

const memories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FROM_SERVER:
      return { ...state, data: [action.payload] };

    case DELETE:
      return {
        ...state,
        data: state.data.filter((d) => d.id !== action.id),
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
