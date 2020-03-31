import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const card = {
  id: 2,
  name: `Sun start hotel 4`,
  amount: 140,
  type: `Hotel`,
  description: `Very sunny place`
};

it(`should render`, () => {
  const tree = renderer
  .create(<PlaceCard
    key={card.id} card={card} onCardTitleClick={() => {}} onCardHover={() => {}}
  />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
