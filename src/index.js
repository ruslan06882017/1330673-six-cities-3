import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import Offers from './mocks/offers.js';

ReactDOM.render(
    <App
      places = {Offers}
    />,
    document.querySelector(`#root`)
);
