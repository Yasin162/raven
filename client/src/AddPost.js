import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
// import { PostContext } from "./context/GlobalPost";
import { UserContext } from "./context/User";

const AddPost = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const { addPost } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setText(e.target.value);
  };
  const handleImageChange = e => {
    setImage(e.target.value);
  };
  const handlePost = () => {
    fetch("/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: text,
        image: image,
      }),
    })
      .then(res => res.json())
      .then(data => {
        addPost(data);
        setImage("");
        setText("");
        navigate("/");
      });
  };
  return (
    <div className="post">
      <textarea
        className="txt-area"
        rows="8"
        cols="10"
        placeholder=" add a post..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <textarea
        className="txt-area"
        rows="3"
        cols="3"
        placeholder=" add a image url..."
        value={image}
        onChange={handleImageChange}
      ></textarea>
      <button className="btn" onClick={handlePost}>
        Post
      </button>
    </div>
  );
};

export default AddPost;
