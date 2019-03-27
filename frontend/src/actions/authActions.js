import { REGISTER_USER } from "./types";
export const register = userData => {
  return {
    type: REGISTER_USER,
    payload: userData
  };
};
