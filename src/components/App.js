import React, { useContext, useEffect } from "react";
import Card from "../elements/Card/Card";
import Header from "../components/Header/Header";
import RouteCard from "../components/RouteCard/RouteCard";
import "normalize.css";

const App = () => {
  return (
    <>
      <div style={{ marginBottom: "30px" }}>
        <Header></Header>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        <div style={{ maxWidth: "500px", display: "inline", margin: "10px" }}>
          <RouteCard />
        </div>
        <div style={{ maxWidth: "500px", display: "inline", margin: "10px" }}>
          <RouteCard />
        </div>
        <div style={{ maxWidth: "500px", display: "inline", margin: "10px" }}>
          <RouteCard />
        </div>
        <div style={{ maxWidth: "500px", display: "inline", margin: "10px" }}>
          <RouteCard />
        </div>
        <div style={{ maxWidth: "500px", display: "inline", margin: "10px" }}>
          <RouteCard />
        </div>
        <div style={{ maxWidth: "500px", display: "inline", margin: "10px" }}>
          <RouteCard />
        </div>
        <div style={{ maxWidth: "500px", display: "inline", margin: "10px" }}>
          <RouteCard />
        </div>
      </div>
    </>
  );
};

export default App;
