import React from "react";

const Main = (props) => {
  // eslint-disable-next-line react/prop-types
  const {numberofRent} = props;
  return (
    <div> Количество предложении {numberofRent} </div>
  );
};
export default Main;
