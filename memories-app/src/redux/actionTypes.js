export const FETCH_FROM_SERVER = "FETCH_FROM_SERVER";
export const FETCH = "FETCH";
export const FETCH_ALL = "FETCH_ALL";
export const CREATE = "CREATE";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";

export const fetchFromServer = (payload) => ({
  type: FETCH_FROM_SERVER,
  payload,
});

export const createMemory = (payload) => ({
  type: CREATE,
  payload,
});

export const deleteMemory = (id) => ({
  type: DELETE,
  id,
});
