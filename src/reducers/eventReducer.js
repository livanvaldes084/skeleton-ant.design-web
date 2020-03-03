import { ADD_EVENT, DELETE_EVENT } from "actions/types";
import { dataEvent } from "./dataEvent";

/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up

const initialState = {
  items: dataEvent
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case DELETE_EVENT:
      return {
        ...state,
        items: state.items.filter(el => el.id !== action.payload)
      };
    default:
      return state;
  }
}
