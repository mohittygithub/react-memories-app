export const FETCH_FROM_SERVER = "FETCH_FROM_SERVER";
export const CREATE = "CREATE";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";

export const setStoreState = (payload) => ({
  type: FETCH_FROM_SERVER,
  payload,
});

export const createMemory = (payload) => ({
  type: CREATE,
  payload,
});
