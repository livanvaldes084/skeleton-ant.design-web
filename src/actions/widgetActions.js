import { SELECT_WIDGET } from "./types";
export const selectWidget = widget => {
  console.log(1);
  return {
    type: SELECT_WIDGET,
    payload: widget
  };
};
