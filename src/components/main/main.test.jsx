import React from "react";
import Main from "./main.jsx";
import renderer from "react-test-renderer";

const places = [
  {name: `New island beach 5`},
  {name: `Sun star beach`},
  {name: `Grant place`},
  {name: `Brilliant time`},
  {name: `Gabriella beach`}
];

it(`<Main /> should render for places`, () => {
  const tree = renderer
  .create(
      <Main places={places}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
