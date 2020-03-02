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
            name = {place.name}
            amount = {place.amount}
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
        name: PropTypes.string,
        amount: PropTypes.number
      })
  )
};

export default PlacesList;
