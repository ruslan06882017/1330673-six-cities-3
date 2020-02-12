import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {offers} = props;
  const numberOfRent = offers.count;
  return (
    <Main numberOfRent={numberOfRent} offers={offers} />
  );
};

App.propTypes = {
  numberOfRent: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf = (
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  )
};

export default App;
