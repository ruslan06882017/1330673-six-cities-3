import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const places = [{
  id: 2,
  name: `President Hotel 2`,
  amount: 140,
  type: `Hotel`,
  description: `Luxury place 2`
}];

it(`<App /> should render for places`, () => {
  const tree = renderer
  .create(
      <App places={places}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
