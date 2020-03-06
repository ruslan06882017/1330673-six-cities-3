import React from "react";
import Main from "./main.jsx";
import Offers from '../../mocks/offers.js';
import renderer from "react-test-renderer";


it(`<Main /> should render for places`, () => {
  const tree = renderer
  .create(
      <Main places={Offers}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
