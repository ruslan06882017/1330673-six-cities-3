import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const places = [
  {name: `Beautiful & luxurious apartment at great location`, amount: 180},
  {name: `Wood and stone place`, amount: 120},
  {name: `Hotel 3`, amount: 100},
  {name: `Hotel 4`, amount: 95}
];

ReactDOM.render(
    <App
      places = {places}
    />,
    document.querySelector(`#root`)
);
