import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const Settings = {
  NUMBER_OF_RENT: 6,
};
ReactDOM.render(
    <App
      numberOfRent={Settings.NUMBER_OF_RENT}
    />,
    document.querySelector(`#root`)
);
