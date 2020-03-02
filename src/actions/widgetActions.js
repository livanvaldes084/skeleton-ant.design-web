import { ADD_WIDGET } from "./types";
export const addWidget = widget => {
  return {
    type: ADD_WIDGET,
    payload: widget
  };
};
