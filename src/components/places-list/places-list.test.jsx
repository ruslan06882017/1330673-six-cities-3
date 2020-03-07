import React from "react";
import PlacesList from "./places-list.jsx";
import renderer from "react-test-renderer";

const places = [{
  id: 2,
  name: `President Hotel`,
  amount: 150,
  type: `Hotel`,
  description: `Luxury place`
}];

it(`<PlacesList /> should render for list`, () => {
  const tree = renderer
  .create(
      <PlacesList places={places}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
