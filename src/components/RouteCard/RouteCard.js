import React from "react";
import Card from "../../elements/Card/Card";

const RouteCard = () => {
  return (
    <Card color="beige">
      <div style={{ width: "200px", margin: "10px" }}>
        <img
          style={{
            width: "100%",
            margin: "10px auto",
            borderRadius: "4px"
          }}
          src={require("../../assets/route_images/_yasinaydin.JPG")}
          alt="placeholder"
        ></img>
        <h2 style={{ textAlign: "center", margin: "3px" }}>routename</h2>
        <h3 style={{ textAlign: "center", margin: "3px" }}>routesetter</h3>
      </div>
    </Card>
  );
};

export default RouteCard;
