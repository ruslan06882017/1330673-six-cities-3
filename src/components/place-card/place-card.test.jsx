import React from "react";
import PlaceCard from "./place-card.jsx";
import renderer from "react-test-renderer";

const name = `The very long name of hotel will be here`;
const amount = 200;

it(`<PlaceCard /> should render for card`, ()=>{
  const tree = renderer
  .create(
      <PlaceCard name={name} amount={amount}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
