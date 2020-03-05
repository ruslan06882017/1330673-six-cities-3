import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
// https://github.com/htmlacademy-react/904445-six-cities-3/blob/master/src/components/cards-list/cards-list.jsx

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.handlePlaceCardMouseOver = this.handlePlaceCardMouseOver.bind(this);
  }

  handlePlaceCardMouseOver(offer) {
    this.setState({
      activeCard: offer
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
            key = {place.name}
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
        name: PropTypes.string,
        amount: PropTypes.number
      })
  )
};

export default PlacesList;
