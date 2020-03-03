import { ADD_WIDGET, DELETE_WIDGET } from "actions/types";
import { dataWidget } from "./dataWidget";

/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up

const initialState = {
  items: dataWidget
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case DELETE_WIDGET:
      return {
        ...state,
        items: state.items.filter(el => el.id !== action.payload)
      };
    default:
      return state;
  }
}
