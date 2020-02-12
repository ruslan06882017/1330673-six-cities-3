import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {placeCards} = props;
  return (
    <Main placeCards={placeCards} />
  );
};

App.propTypes = {
  placeCards: PropTypes.arrayOf = (
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired
    })
  )
};

export default App;
