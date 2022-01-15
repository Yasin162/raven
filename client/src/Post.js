import React, { useState, useContext } from "react";
import { UserContext } from "./context/User";
import { useParams } from "react-router-dom";
import CommentSection from "./CommentSection";
// import { PostContext } from "./context/GlobalPost";

const Post = () => {
  const { loggedIn, posts, onSave, deletePost, user } = useContext(UserContext);

  const [editedPost, setEditedPost] = useState();
  const params = useParams();
  const post = posts.find(p => `${p.id}` === params.id);

  const handleChange = e => {
    setEditedPost(e.target.value);
  };
  if (posts.length === 0) {
    return <div>Loading...</div>;
  } else if (loggedIn && user.id === post.author_id) {
    console.log(post);
    return (
      <div>
        <div className="post">
          <textarea
            className="txt-area"
            value={editedPost}
            onChange={handleChange}
          >
            {post.text}
          </textarea>
          <div className="footer"></div>
          <button className="btn" onClick={() => onSave(editedPost, post.id)}>
            save
          </button>
          <button className="btn" onClick={() => deletePost(post.id)}>
            Delete
          </button>
          <img className="img" src={post.image} alt="" />
        </div>
        <CommentSection />
      </div>
    );
  } else {
    return (
      <div>
        <div className="post">
          {/* <h3>add user name</h3> */}
          <span className="edit-post">{post.text}</span>

          <img className="img" src={post.image} alt="" />
        </div>
        <CommentSection />
      </div>
    );
  }
};

export default Post;
