import React from "react";
import Main from "./main.jsx";
import renderer from "react-test-renderer";

const places = [{
  id: 1,
  name: `Place name here`,
  amount: 112,
  type: `Hotel`,
  description: `Description here`
}];

it(`<Main /> should render for places`, () => {
  const tree = renderer
  .create(
      <Main places={places}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
