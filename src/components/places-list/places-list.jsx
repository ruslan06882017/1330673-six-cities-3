import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

  }

  render() {
    const {places} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {places.map((place) => (
          <PlaceCard key={place.id} card={place}
            onCardHover={
              (card) => {
                this.setState({activeCard: card});
              }
            }
            onCardTitleClick={() => {}}/>
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
