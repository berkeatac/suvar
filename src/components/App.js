import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import RouteCard from "../components/RouteCard/RouteCard";
// import CheckBox from "../elements/CheckBox/CheckBox";
// import FilterItem from "../components/FilterItem/FilterItem";
import FilterItems from "../components/FilterItems/FilterItems";
import PostRoute from "../components/PostRoute/PostRoute";

import images from "../constants/images";
import { firestore, signInWithGoogle, signOut } from "../firebase";
import "normalize.css";
import "./App.css";
import { collectIdsAndDocs } from "../utilities";
import { UserContext } from "../context/UserProvider";

import { Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [grades, setGrades] = useState({
    green: true,
    blue: true,
    yellow: true,
    orange: true,
    red: true,
  });

  const user = useContext(UserContext);

  // let unsub;

  useEffect(() => {
    getSnapshot("posts");
    return () => {
      // unsub();
    };
  }, []);

  const getSnapshot = async (collection) => {
    const snapshot = await firestore.collection(collection).get();
    const posts = snapshot.docs.map(collectIdsAndDocs);
    console.log(posts);
    return snapshot;
  };

  // const subscribeTo = (collection) => {
  //   unsub = firestore.collection("posts").onSnapshot((snapshot) => {
  //     const posts = snapshot.docs.map(collectIdsAndDocs);
  //     console.log("subscribe", posts);
  //   });
  // };

  // const handleCreate = async (post) => {
  //   const docRef = await firestore.collection("posts").add(post);
  //   const doc = await docRef.get();

  //   const newPost = collectIdsAndDocs(doc);
  // };

  const handleGradeChange = (grade) => {
    setGrades({ ...grades, [grade]: !grades[grade] });
  };

  const renderCards = (imgs) => {
    imgs = imgs.filter((item) => grades[item.grade] === true);
    return imgs.map((element) => (
      <div className="route-card-wrapper" key={element.title}>
        <RouteCard
          imgUrl={element.src}
          routeName={element.title}
          routeSetter={element.creator}
          color={element.grade}
        />
      </div>
    ));
  };

  return (
    <div>
      <div>
        <Header></Header>
      </div>
      {user ? user.displayName : `no user`}
      <button onClick={user ? () => signOut() : () => signInWithGoogle()}>
        {user ? "Sign Out" : "Sign In"}
      </button>
      <Switch>
        <Route exact path="/">
          <div className="sidebar">
            <FilterItems
              grades={grades}
              handleGradeChange={handleGradeChange}
            />
          </div>
          <div className="wrapper">
            <div className="cards-content-wrapper">
              <div className="cards-content">{renderCards(images)}</div>
            </div>
          </div>
        </Route>
        <Route exact path="/post">
          <PostRoute grades={grades} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
