import React from "react";
import { Link } from "react-router-dom";

import classes from "./Logo.module.css";
import SudoskLogo from "../../assets/logo.png";

const logo = (props) => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <img src={SudoskLogo} style={{ height: "40px" }} alt="logo"></img>
    </Link>
  );
};

export default logo;
