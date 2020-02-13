import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {places} = props;
  return (
    <Main places={places} />
  );
};

App.propTypes = {
  places: PropTypes.arrayOf = (
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired
    })
  )
};

export default App;
