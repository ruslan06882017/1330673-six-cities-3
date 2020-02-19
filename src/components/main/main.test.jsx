import React from "react";
import Main from "./main.jsx";
import renderer from "react-test-renderer";

const places = [
  {name: `New island beach 4`, amount: 200}
];

it(`<Main /> should render for places`, () => {
  const tree = renderer
  .create(
      <Main places={places}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
