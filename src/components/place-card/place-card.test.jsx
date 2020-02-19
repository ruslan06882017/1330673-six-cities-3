import React from "react";
import PlaceCard from "./place-card.jsx";
import renderer from "react-test-renderer";

const name = `The very long name of hotel will be here.`;

it(`<PlaceCard /> should render for card`, () => {
  const tree = renderer
  .create(
      <PlaceCard name={name}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
