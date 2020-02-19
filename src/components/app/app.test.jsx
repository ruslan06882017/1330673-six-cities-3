import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const places = [
  {name: `New island beach 5`},
  {name: `Sun star beach`},
  {name: `Grant place`},
  {name: `Brilliant time`},
  {name: `Gabriella beach`}
];

it(`<App /> should render for places`, () => {
  const tree = renderer
  .create(
      <App places={places}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
