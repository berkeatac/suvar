import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import RouteCard from "../components/RouteCard/RouteCard";
import CheckBox from "../elements/CheckBox/CheckBox";
import FilterItem from "../components/FilterItem/FilterItem";

import images from "../constants/images";
import { firestore, signInWithGoogle } from "../firebase";
import "normalize.css";
import "./App.css";
import { collectIdsAndDocs } from "../utilities";

const App = () => {
  const [grades, setGrades] = useState({
    green: true,
    blue: true,
    yellow: true,
    orange: true,
    red: true,
  });

  let unsub;

  useEffect(() => {
    // getSnapshot("posts");
    subscribeTo("posts");
    // handleCreate({
    //   content: "c",
    //   title: "t",
    //   user: { displayName: "d", uid: 13 },
    // });

    return () => {
      unsubscribeFrom("posts");
    };
  }, []);

  const getSnapshot = async (collection) => {
    const snapshot = await firestore.collection(collection).get();
    const posts = snapshot.docs.map(collectIdsAndDocs);
    console.log(posts);
    return snapshot;
  };

  const subscribeTo = (collection) => {
    unsub = firestore.collection("posts").onSnapshot((snapshot) => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
      console.log("subscribe", posts);
    });
  };

  const unsubscribeFrom = (collection) => {
    unsub();
  };

  const handleCreate = async (post) => {
    const docRef = await firestore.collection("posts").add(post);
    const doc = await docRef.get();

    const newPost = collectIdsAndDocs(doc);
  };

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
      <div className="sidebar">
        <FilterItem
          color="green"
          selected={grades.green}
          handleGradeChange={handleGradeChange}
        />
        <FilterItem
          color="blue"
          selected={grades.blue}
          handleGradeChange={handleGradeChange}
        />
        <FilterItem
          color="yellow"
          selected={grades.yellow}
          handleGradeChange={handleGradeChange}
        />
        <FilterItem
          color="orange"
          selected={grades.orange}
          handleGradeChange={handleGradeChange}
        />
        <FilterItem
          color="red"
          selected={grades.red}
          handleGradeChange={handleGradeChange}
        />
      </div>
      <div className="wrapper">
        <div className="cards-content-wrapper">
          <div className="cards-content">{renderCards(images)}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
