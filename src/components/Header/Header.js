import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { Link } from "react-router-dom";
import { signOut, signInWithGoogle } from "../../firebase";

import classes from "./Header.module.css";
import Logo from "../../elements/Logo/Logo";

const Header = (props) => {
  const user = useContext(UserContext);

  return (
    <header className={classes.Header} style={{ backgroundColor: props.color }}>
      <Logo colorScheme={"light"} clicked={props.onClickHandler} />

      <div>
        {user ? (
          <>
            {user.displayName}
            <Link to="/post">
              <button>Post Route</button>
            </Link>
          </>
        ) : null}
        <button onClick={user ? () => signOut() : () => signInWithGoogle()}>
          {user ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </header>
  );
};

export default Header;
