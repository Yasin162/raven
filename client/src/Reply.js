import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Reply = ({ addComment }) => {
  const [reply, setReply] = useState("");
  const params = useParams();
  const handleChange = e => {
    setReply(e.target.value);
  };

  const handleReply = () => {
    fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: reply,
        post_id: params.id,
      }),
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        addComment(data);
        setReply("");
      });
  };

  return (
    <div className="reply-box">
      <textarea
        className="reply"
        value={reply}
        onChange={handleChange}
        placeholder="reply..."
      ></textarea>
      <div className="footer">
        <button className="btn" onClick={handleReply}>
          reply
        </button>
      </div>
    </div>
  );
};

export default Reply;
