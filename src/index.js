import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const places = [
  {name: `Beautiful & luxurious apartment at great location`},
  {name: `Wood and stone place`},
  {name: `Hotel 3`},
  {name: `Hotel 4`}
];

ReactDOM.render(
    <App
      places = {places}
    />,
    document.querySelector(`#root`)
);
