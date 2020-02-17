import React from "react";
import Main from "./main.jsx";
import renderer from "react-test-renderer";

const places = [
  {name: `New island beach 5`, amount: 100},
  {name: `Sun star beach`, amount: 110},
  {name: `Grant place`, amount: 120},
  {name: `Brilliant time`, amount: 145},
  {name: `Gabriella beach`, amount: 150}
];

it(`<Main /> should render for places`, ()=>{
  const tree = renderer
  .create(
      <Main places={places}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
