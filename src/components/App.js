import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import RouteCard from "../components/RouteCard/RouteCard";
import CheckBox from "../elements/CheckBox/CheckBox";
import FilterItem from "../components/FilterItem/FilterItem";

import images from "../constants/images";

import "normalize.css";
import "./App.css";

const App = () => {
  const [grades, setGrades] = useState({
    green: true,
    blue: true,
    yellow: true,
    orange: true,
    red: true,
  });

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
