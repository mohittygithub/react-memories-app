import axios from "axios";

export const FETCH_MEMORIES_REQUEST = "FETCH_MEMORIES_REQUEST";
export const FETCH_MEMORIES_SUCCESS = "FETCH_MEMORIES_SUCCESS";
export const FETCH_MEMORIES_FAILURE = "FETCH_MEMORIES_FAILURE";
export const DELETE_MEMORY_SUCCESS = "DELETE_MEMORY_SUCCESS";
export const DELETE_MEMORY_FAILURE = "DELETE_MEMORY_FAILURE";
export const CREATE_MEMORY_SUCCESS = "CREATE_MEMORY_SUCCESS";
export const CREATE_MEMORY_FAILURE = "CREATE_MEMORY_FAILURE";

const url = "http://localhost:5000/posts";

export const fetchMemoryRequest = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_MEMORIES_REQUEST,
    });

    const response = await axios.get(url);

    dispatch({
      type: FETCH_MEMORIES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_MEMORIES_FAILURE,
      payload: error.message,
    });
  }
};

export const deleteMemory = (id) => async (dispatch) => {
  try {
    // dispatch({
    //   type: DELETE_MEMORY,
    // })

    const response = await axios.delete(url + `/${id}`);
    // console.log("node response => ", response.data);

    dispatch({
      type: DELETE_MEMORY_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_MEMORY_FAILURE,
      payload: error.message,
    });
  }
};

export const createMemory = (memory) => async (dispatch) => {
  try {
    const response = await axios.post(url, memory);

    dispatch({
      type: CREATE_MEMORY_SUCCESS,
      payload: response.data,
    });

    // console.log(response);
  } catch (error) {
    dispatch({
      error: error.message,
    });
  }
};
