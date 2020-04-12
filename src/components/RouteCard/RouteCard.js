import React from "react";
import Card from "../../elements/Card/Card";
import colors from "../../constants/colors";

const RouteCard = (props) => {
  return (
    <Card color="beige">
      <div style={{ width: "200px", margin: "10px" }}>
        <img
          style={{
            width: "100%",
            margin: "10px auto",
            borderRadius: "4px",
          }}
          src={props.imgUrl}
          alt="placeholder"
        ></img>
        <div
          style={{
            height: "10px",
            backgroundColor: colors[`g_${props.color}`],
            borderRadius: "6px",
            marginBottom: "6px",
          }}
        />
        <h2 style={{ textAlign: "center", margin: "3px" }}>
          {props.routeName}
        </h2>
        <h5 style={{ textAlign: "center", margin: "3px" }}>
          {props.routeSetter}
        </h5>
      </div>
    </Card>
  );
};

export default RouteCard;
