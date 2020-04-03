import React from "react";

import classes from "./Card.module.css";

const card = props => {
  return (
    <div className={classes.Card}>
      {/*style={{ backgroundColor: `${props.color}` }}> */}
      {props.children}
    </div>
  );
};

export default card;
