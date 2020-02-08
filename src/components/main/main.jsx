import React from "react";

const Main = (props) => {
  // eslint-disable-next-line react/prop-types
  const {numberOfRent} = props;
  return (
    <div> Количество предложении {numberOfRent} </div>
  );
};
export default Main;
