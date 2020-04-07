import React, { useContext, useEffect } from "react";
import Header from "../components/Header/Header";
import RouteCard from "../components/RouteCard/RouteCard";
import CheckBox from "../elements/CheckBox/CheckBox";
import images from "../constants/images";

import "normalize.css";
import "./App.css"

const App = () => {
  const renderCards = (imgs) => {
    imgs.map(element => (
      <div style={{ maxWidth: "500px", display: "inline", margin: "10px" }}>
        <RouteCard
          imgUrl={element.src}
          routeName={element.title}
          routeSetter={element.creator}
          color={element.grade}
        />
      </div>
    ))
  }

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="wrapper">
        <div className="sidebar">
            <div className="sidebar-element"></div>
            <div className="sidebar-element"></div>
            <div className="sidebar-element"></div>
            <div className="sidebar-element"></div>
        </div>
        <div className="cards-content-wrapper">
          <div className="cards-content" >
          {
          images.map(element => (
            <div style={{ maxWidth: "300px", minWidth: "260px", margin: "10px auto" }}>
              <RouteCard
                imgUrl={element.src}
                routeName={element.title}
                routeSetter={element.creator}
                color={element.grade}
                />
             </div>))
          }
        </div>
        
        </div>
      </div>
    </>
  );
};

export default App;
