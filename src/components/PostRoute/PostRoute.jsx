import React, { useState } from "react";

const PostRoute = ({ grades }) => {
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState("green");
  const [routeImage, setRouteImage] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(title, grade, routeImage);
  };

  const getURL = (img) => (img !== null ? URL.createObjectURL(img) : null);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
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
};

export default PostRoute;
