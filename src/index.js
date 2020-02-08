import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const Settings = {
  numberofRent: 6,
};
ReactDOM.render(
    <App
      numberofRent={Settings.numberofRent}
    />,
    document.querySelector(`#root`)
);
