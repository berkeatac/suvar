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

  const [routes, setRoutes] = useState([]);

  const user = useContext(UserContext);

  // let unsub;

  useEffect(() => {
    getSnapshot("routes");
    return () => {
      // unsub();
    };
  }, []);

  const getSnapshot = async (collection) => {
    const snapshot = await firestore.collection(collection).get();
    setRoutes(snapshot.docs.map(collectIdsAndDocs));
    console.log(snapshot.docs.map(collectIdsAndDocs));
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
          imgUrl={element.url}
          routeName={element.title}
          routeSetter={element.setter}
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
              <div className="cards-content">{renderCards(routes)}</div>
            </div>
          </div>
        </Route>
        <Route exact path="/post">
          {user ? (
            <PostRoute grades={grades} />
          ) : (
            "You should log in to post routes"
          )}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
