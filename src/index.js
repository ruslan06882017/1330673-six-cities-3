import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const offers = [
  {name: `Beautiful & luxurious apartment at great location`},
  {name: `Wood and stone place`},
  {name: `Hotel 3`},
  {name: `Hotel 4`},
  {name: `Hotel 5`}
];

ReactDOM.render(
    <App
      offers = {offers}
    />,
    document.querySelector(`#root`)
);
