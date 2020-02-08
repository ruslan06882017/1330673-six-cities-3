import React from "react";
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {numberOfRent} = props;
  return (
    <Main numberOfRent={numberOfRent} />
  );
};
export default App;
