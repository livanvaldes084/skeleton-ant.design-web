import { ADD_WIDGET, DELETE_WIDGET } from "./types";

/**
 * Add widget
 * @param {*} widget
 */
export const addWidget = widget => {
  return {
    type: ADD_WIDGET,
    payload: widget
  };
};

/**
 * Delete widget
 * @param {*} widget
 */
export const deleteWidget = id => {
  return {
    type: DELETE_WIDGET,
    payload: id
  };
};
