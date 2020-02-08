import React from "react";
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {numberofRent} = props;
  return (
    <Main numberofRent={numberofRent} />
  );
};
export default App;
