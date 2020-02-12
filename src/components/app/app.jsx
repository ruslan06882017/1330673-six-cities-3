import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {offers} = props;
  return (
    <Main offers={offers} />
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf = (
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired
    })
  )
};

export default App;
