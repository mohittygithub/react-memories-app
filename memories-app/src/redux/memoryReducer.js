import {
  FETCH_MEMORIES_REQUEST,
  FETCH_MEMORIES_SUCCESS,
  FETCH_MEMORIES_FAILURE,
  DELETE_MEMORY_FAILURE,
  DELETE_MEMORY_SUCCESS,
} from './actionTypes'

const initialState = {
  loading: false,
  memories: [],
  error: '',
}

const memoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEMORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      }
    case FETCH_MEMORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'unable to fetch data from server',
      }
    case FETCH_MEMORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        memories: action.payload,
        error: '',
      }

    case DELETE_MEMORY_SUCCESS:
      return {
        ...state,
        loading: false,
        memories: state.memories.filter((d) => d._id !== action.payload),
        error: '',
      }
    case DELETE_MEMORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default memoryReducer
