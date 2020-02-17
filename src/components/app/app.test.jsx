import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const places = [
  {name: `New island beach 5`, amount: 100},
  {name: `Sun star beach`, amount: 110},
  {name: `Grant place`, amount: 120},
  {name: `Brilliant time`, amount: 145},
  {name: `Gabriella beach`, amount: 150}
];

it(`<App /> should render for places`, ()=>{
  const tree = renderer
  .create(
      <App places={places}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
