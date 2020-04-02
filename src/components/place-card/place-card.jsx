import React from "react";
import PropTypes from "prop-types";

const PlaceCard = (props) => {
  const {card} = props;
  const {name, amount, type} = card;
  const {onCardTitleClick, onCardHover} = props;
  const handleMouseEnter = () => {
    onCardHover(card);
  };
  const handleMouseLeave = () => {
    onCardHover(null);
  };
  const handleCardTitleClick = () => {
    onCardTitleClick(card);
  }
  return (
    <article className="cities__place-card place-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{amount}&euro;</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={handleCardTitleClick}>
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
    type: PropTypes.string
  }),

  onCardHover: PropTypes.func,
  onCardTitleClick: PropTypes.func
};

export default PlaceCard;
