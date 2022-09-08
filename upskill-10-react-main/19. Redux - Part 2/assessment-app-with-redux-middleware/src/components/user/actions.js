import { ERROR_FETCH_USER, FETCH_USER } from "./constants";

export const fetchUser = (user) => ({
  type: FETCH_USER,
  payload: user
});

export const errorFetchUser = (error) => ({
  type: ERROR_FETCH_USER,
  payload: JSON.stringify(error, null, 4)
});

const fetchUserFromApi = () => fetch("https://randomuser.me/api/");

export const fetchUserThunk = () => (dispatch) =>
  fetchUserFromApi()
    .then((data) => data.json())
    .then(
      (data) =>
        data.results && data.results[0] && dispatch(fetchUser(data.results[0]))
    )
    .catch((error) => dispatch(errorFetchUser(error)));
