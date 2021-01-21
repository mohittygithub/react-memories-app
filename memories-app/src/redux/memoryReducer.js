import {
  FETCH_MEMORIES_REQUEST,
  FETCH_MEMORIES_SUCCESS,
  FETCH_MEMORIES_FAILURE,
  DELETE_MEMORY_REQUEST,
  DELETE_MEMORY_FAILURE,
  DELETE_MEMORY_SUCCESS,
  CREATE_MEMORY_REQUEST,
  CREATE_MEMORY_SUCCESS,
  CREATE_MEMORY_FAILURE,
  SET_MEMORY_BY_ID,
} from './actionTypes'

const initialState = {
  loading: false,
  memories: [],
  memory: [],
  error: '',
}

const memoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEMORIES_REQUEST:
      return {
        ...state,
        loading: true,
        memory: [],
        error: '',
      }
    case FETCH_MEMORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        memories: action.payload,
        memory: [],
        error: '',
      }
    case FETCH_MEMORIES_FAILURE:
      return {
        ...state,
        loading: false,
        memory: [],
        error: 'unable to fetch data from server',
      }
    case CREATE_MEMORY_REQUEST:
      return {
        ...state,
        loading: true,
        memory: [],
        error: '',
      }
    case CREATE_MEMORY_SUCCESS:
      return {
        ...state,
        loading: false,
        memory: [],
        memories: [...state.memories, action.payload],
        error: '',
      }
    case CREATE_MEMORY_FAILURE:
      return {
        ...state,
        loading: false,
        memory: [],
        error: 'unable to fetch data from server',
      }
    case SET_MEMORY_BY_ID:
      return {
        ...state,
        memory: action.payload,
      }
    case DELETE_MEMORY_REQUEST:
      return {
        ...state,
        loading: true,
        memory: null,
        error: '',
      }
    case DELETE_MEMORY_SUCCESS:
      return {
        ...state,
        loading: false,
        memory: null,
        memories: state.memories.filter((d) => d._id !== action.payload.id),
        error: '',
      }
    case DELETE_MEMORY_FAILURE:
      return {
        ...state,
        loading: false,
        memory: null,
        error: action.payload,
      }
    default:
      return state
  }
}

export default memoryReducer
