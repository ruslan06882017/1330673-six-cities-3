import React from "react";
import PlacesList from "./place-card.jsx";
import Offers from '../../mocks/offers.js';
import renderer from "react-test-renderer";

it(`<PlacesList /> should render`, () => {
  const tree = renderer
  .create(
      <PlacesList places={Offers}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
