import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import Routes from "./Routes";
import theme from "./theme";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import createLogger from "redux-logger";
import allReducers from "./reducers";

const browserHistory = createBrowserHistory();
const logger = createLogger();
const store = createStore(allReducers, applyMiddleware(thunk, promise, logger));

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
