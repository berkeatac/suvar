import React, { useState, useRef, useEffect } from "react";
import Card from "../../elements/Card/Card";
import colors from "../../constants/colors";

import loadImage from "blueimp-load-image";

const RouteCard = (props) => {
  const imgRef = useRef(null);
  const [img, setImg] = useState(null);

  // WEIRD WORK-AROUND FOR IMAGES SHOWING UP SIDEWAYS ON CHROME
  // IF THEY ARE UPLOADED FROM IPHONE
  useEffect(() => {
    if (imgRef.current.children.length == 0) {
      loadImage(
        props.imgUrl,
        (img) => {
          console.log(img);
          imgRef.current.appendChild(img);
        },
        { orientation: true, maxWidth: 200 }
      );
    }
  }, []);

  return (
    <Card color="beige">
      <div style={{ width: "200px", margin: "10px" }}>
        <div
          style={{
            width: "100%",
            margin: "10px auto",
            borderRadius: "4px",
          }}
          ref={imgRef}
          alt="placeholder"
        />
        {img}
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
