import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged(async (userAuth) => {
    if (user && user.email && !user.email.includes("sabanciuniv")) {
      auth.signOut();
    } else {
      console.log(user);
      setUser(userAuth);
    }
  });

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
