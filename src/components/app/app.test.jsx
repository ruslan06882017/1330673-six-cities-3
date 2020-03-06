import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import Offers from '../../mocks/offers.js';


it(`<App /> should render for places`, () => {
  const tree = renderer
  .create(
      <App places={Offers}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
