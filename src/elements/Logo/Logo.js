import React from "react";
import { Link } from "react-router-dom";

import classes from "./Logo.module.css";
import SudoskLogo from "../../assets/logo.png";

const logo = (props) => {
  let logoWithColorScheme = [
    classes.Logo,
    props.colorScheme === "dark" ? classes.Dark : classes.Light,
  ];
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <img src={SudoskLogo} style={{ height: "40px" }}></img>
    </Link>
  );
};

export default logo;
