import axios from "axios";
import history from "../components/history";
import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTERED_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  MESSAGE,
  CLEAR_MESSAGE, 
} from "./types";

//Check token and load user
export const loadUser = () => (dispatch, getState) => {
  //User Loading
  axios
    // .get("/api/auth/user", tokenConfig(getState))
    .get("/users", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      // dispatch(returnErrors(err.response.data, err.response.status));
      // dispatch(message(err.response.data.msg));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

//Register User
export const register = ({ name, password }) => (dispatch) => {
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //Request body
  const body = JSON.stringify({ name, password });

  axios
    .post("/users", body, config)
    .then((res) => {
      dispatch({
        type: REGISTERED_SUCCESS,
        payload: res.data,
      });
      history.push("/");
    })
    .catch((err) => {
      dispatch(
        // returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
        message(err.response.data.msg)
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

//Login
export const login = ({ name, password }) => (dispatch) => {
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //Request body
  const body = JSON.stringify({ name, password });
  axios
    .post("/auth", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      history.push("/");
    })
    .catch((err) => {
      // console.log(err.response.data.msg, err.response.status, "LOGIN_FAIL")
      dispatch(message(err.response.data.msg));
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

//Logout
export const logout = () => {
  history.push("/");
  return {
    type: LOGOUT_SUCCESS,
  };
};

//message
export const message = (msg) => (dispatch) => {
  dispatch({
    type: MESSAGE,
    payload: msg,
  });
};

export const clearMessage = () => (dispatch) => {
  dispatch({
    type: CLEAR_MESSAGE,
  });
};

//Setup Config/headers and token
export const tokenConfig = (getState) => {
  //Get token from localstorage
  const token = getState().auth.token;
  //Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  //If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
