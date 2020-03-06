import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.handlePlaceCardMouseOver = this.handlePlaceCardMouseOver.bind(this);
  }

  handlePlaceCardMouseOver(places) {
    this.setState({
      activeCard: places
    });
  }

  render() {
    const {places} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {places.map((place) => (
          <PlaceCard
            name = {place.name}
            amount = {place.amount}
            key = {place.id}
            type = {place.type}
            onCardMouseOver = {this.handlePlaceCardMouseOver}
          />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        amount: PropTypes.number,
        type: PropTypes.string
      })
  )
};

export default PlacesList;
