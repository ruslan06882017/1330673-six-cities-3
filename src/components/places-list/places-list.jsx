import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.onCardHover = this.onCardHover.bind(this);

    this.state = {
      activeCard: null,
    };
  }

  onCardHover(place) {
    this.setState({
      activeCard: place
    });
  }
  

  render() {
    const {places, onOfferTitleClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {places.map((place) => (
          <PlaceCard key={place.id} card={place} onCardHover={this.onCardHover} onCardTitleClick={onOfferTitleClick}/>
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        amount: PropTypes.number,
        rating: PropTypes.number,
        type: PropTypes.string
      })
  )
};

export default PlacesList;
