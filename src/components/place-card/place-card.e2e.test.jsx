import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title of place be pressed`, () => {
  const onCardTitleClick = jest.fn();

  const placeCardComponent = shallow(
      <PlaceCard
        name = {`The long name of hotel`}
        amount = {120}
      />
  );

  const h2Element = placeCardComponent.find(`h2.place-card__name`);
  h2Element.simulate(`click`);
  expect(onCardTitleClick.mock.calls.length).toBe(0);
});
