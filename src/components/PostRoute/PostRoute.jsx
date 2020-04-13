import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { firestore, storage } from "../../firebase";
import { UserContext } from "../../context/UserProvider";
import { PulseLoader } from "react-spinners";

import "./PostRoutes.css";

const PostRoute = ({ grades }) => {
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState("green");
  const [routeImage, setRouteImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = useContext(UserContext);
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (routeImage && title) {
      setLoading(true);
      const timestamp = Date.now();
      console.log(title, grade, routeImage);
      storage
        .ref()
        .child(timestamp.toString())
        .put(routeImage)
        .then((response) => {
          response.ref.getDownloadURL().then((photoURL) => {
            firestore
              .collection("routes")
              .add({
                title,
                grade,
                uid: user.uid,
                url: photoURL,
                setter: user.displayName,
                timestamp,
              })
              .then((docRef) => {
                history.push("/");
              });
          });
        });
    }
  };

  const getURL = (img) => (img !== null ? URL.createObjectURL(img) : null);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <PulseLoader size={25} color={"#36D7B7"}></PulseLoader>
      </div>
    );
  } else {
    return (
      <div>
        <form
          onSubmit={handleFormSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "450px",
            margin: "10px auto",
          }}
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select onChange={(e) => setGrade(e.target.value)}>
            {Object.keys(grades).map((key) => (
              <option value={key}>{key}</option>
            ))}
          </select>
          <input
            type="file"
            name="image"
            onChange={(e) => setRouteImage(e.target.files[0])}
          />
          <input className="create" type="submit" value="Create Post" />
          <img src={getURL(routeImage)} style={{ width: "250px" }}></img>
        </form>
      </div>
    );
  }
};

export default PostRoute;
