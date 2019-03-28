import { REGISTER_USER, DISPLAY_ERRORS } from "./types";
import axios from "axios";
export const register = userData => dispatch => {
  return axios
    .post("register", {
      email: userData.email,
      name: userData.name,
      password: userData.password,
      confirm_password: userData.confirm_password
    })
    .then(response => console.log(response))
    .catch(err =>
      dispatch({
        type: DISPLAY_ERRORS,
        payload: err.response.data
      })
    );
};
