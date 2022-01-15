import React, { useContext } from "react";
import { UserContext } from "./context/User";

const Comments = ({ comments }) => {
  console.log(comments);
  if (!comments) {
    return <h1>No comments!</h1>;
  } else {
    const comment = comments.map(c => (
      <span className="comments">{c.text}</span>
    ));
    return <div className="comment-container">{comment.reverse()}</div>;
  }
};
export default Comments;
