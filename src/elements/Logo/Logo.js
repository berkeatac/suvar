import React from "react";
import { Link } from "react-router-dom";

import classes from "./Logo.module.css";

const logo = (props) => {
  let logoWithColorScheme = [
    classes.Logo,
    props.colorScheme === "dark" ? classes.Dark : classes.Light,
  ];
  return (
    <h1 className={logoWithColorScheme.join(" ")} onClick={props.clicked}>
      <Link to="/" style={{ textDecoration: "none" }}>
        suvar
      </Link>
    </h1>
  );
};

export default logo;
