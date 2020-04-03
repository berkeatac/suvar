import React, { useContext, useEffect } from "react";
import Header from "../components/Header/Header";
import RouteCard from "../components/RouteCard/RouteCard";
import CheckBox from "../elements/CheckBox/CheckBox";
import images from "../constants/images";

import "normalize.css";

const App = () => {
  return (
    <>
      <div style={{ marginBottom: "30px" }}>
        <Header></Header>
      </div>
      <CheckBox></CheckBox>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {images.map(element => (
          <div style={{ maxWidth: "500px", display: "inline", margin: "10px" }}>
            <RouteCard
              imgUrl={element.src}
              routeName={element.title}
              routeSetter={element.creator}
              color={element.grade}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
