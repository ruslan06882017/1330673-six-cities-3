import React from "react";
import PlacesList from "./places-list.jsx";
import Offers from '../../mocks/offers.js';
import renderer from "react-test-renderer";


it(`<PlacesList /> should render for list`, () => {
  const tree = renderer
  .create(
      <PlacesList places={Offers}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
