import axios from "axios";

export const FETCH_MEMORIES_REQUEST = "FETCH_MEMORIES_REQUEST";
export const FETCH_MEMORIES_SUCCESS = "FETCH_MEMORIES_SUCCESS";
export const FETCH_MEMORIES_FAILURE = "FETCH_MEMORIES_FAILURE";
export const DELETE_MEMORY = "DELETE_MEMORY";
export const DELETE_MEMORY_SUCCESS = "DELETE_MEMORY_SUCCESS";
export const DELETE_MEMORY_FAILURE = "DELETE_MEMORY_FAILURE";

export const fetchMemoryRequest = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_MEMORIES_REQUEST,
    });

    const response = await axios.get("http://localhost:5000/posts");

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
    dispatch({
      type: DELETE_MEMORY,
    });

    const response = await axios.delete(`http://localhost/posts/${id}`);

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
