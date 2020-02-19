import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const places = [
  {name: `Beautiful & luxurious apartment at great location`, amount: 200}
];

ReactDOM.render(
    <App
      places = {places}
    />,
    document.querySelector(`#root`)
);
