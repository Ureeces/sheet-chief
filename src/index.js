import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const fonts = {
  spartan: "'Spartan', sans-serif",
  smythe: "'Smythe', cursive",
};

const theme = createMuiTheme({
  typography: {
    fontFamily: fonts.spartan,
  },

  palette: {
    primary: {
      main: "#000000",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
