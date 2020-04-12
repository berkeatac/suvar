import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { firestore, storage } from "../../firebase";
import { UserContext } from "../../context/UserProvider";

import "./PostRoutes.css";

const PostRoute = ({ grades }) => {
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState("green");
  const [routeImage, setRouteImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = useContext(UserContext);
  const history = useHistory();

  const handleFormSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const timestamp = Date.now();
    console.log(title, grade, routeImage);
    storage
      .ref()
      .child(title)
      .put(timestamp)
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
              setLoading(false);
              history.push("/");
            });
        });
      });
  };

  const getURL = (img) => (img !== null ? URL.createObjectURL(img) : null);

  if (loading) {
    return "Loading";
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
        </form>
        <img src={getURL(routeImage)} style={{ width: "100px" }}></img>
      </div>
    );
  }
};

export default PostRoute;
