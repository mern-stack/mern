import { DISPLAY_ERRORS } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ERRORS:
      return action.payload;
    default:
      return state;
  }
};
