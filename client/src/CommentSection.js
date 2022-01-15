import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./context/User";
import Comments from "./Comments";
import Reply from "./Reply";
import { useParams } from "react-router-dom";
const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const { loggedIn } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/posts/${id}/comments`)
      .then(res => res.json())
      .then(data => {
        setComments(data);
      });
  }, []);
  const addComment = data => {
    const newComment = {
      post_id: data.post_id,
      text: data.text,
    };
    setComments([...comments, newComment]);
  };
  if (!loggedIn) {
    return (
      <div>
        <Comments comments={comments} />
      </div>
    );
  } else {
    return (
      <div>
        <Reply addComment={addComment} />
        <Comments comments={comments} />
      </div>
    );
  }
};

export default CommentSection;
