import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Send card details when we mouse over on card`, () => {
  const onCardTitleClick = jest.fn();
  const placeCardComponent = shallow(
      <PlaceCard
        name = {`Sun star beach hotel 5`}
        amount = {120}
        type = {`Hotel 1`}
        onCardTitleClick = {onCardTitleClick}
      />
  );

  const element = placeCardComponent.find(`.cities__place-card`);
  element.simulate(`click`);
  expect(onCardTitleClick).toHaveBeenCalledTimes(1);
});
