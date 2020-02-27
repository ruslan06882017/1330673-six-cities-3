// https://github.com/htmlacademy-react/1037955-six-cities-3/blob/master/src/components/offers-list/offers-list.jsx

import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentActiveCard: {}
    };

  }

  render() {
    const {places} = this.props;
    const {currentActiveCard: {}} = this.state;

    return (
      <div className="cities__places-list places__list tabs__content">
        {places.map((place) => (
          <PlaceCard
            offer = {place}
            key = {place.name}
          />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.shape({
        offer: PropTypes.string
      })
  )
};


export default PlacesList;
