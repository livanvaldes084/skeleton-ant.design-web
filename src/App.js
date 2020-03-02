import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import Routes from "./Routes";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./store";

const browserHistory = createBrowserHistory();

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
