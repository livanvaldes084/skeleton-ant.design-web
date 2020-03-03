import { combineReducers } from "redux";
import WidgetReducer from "./widgetReducer";
import EventReducer from "./eventReducer";

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  widgets: WidgetReducer,
  events: EventReducer
});

export default allReducers;
