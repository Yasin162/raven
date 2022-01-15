import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { PostContext } from "./context/GlobalPost";
import { UserContext } from "./context/User";
const PostLinks = () => {
  const { posts } = useContext(UserContext);
  if (posts.length === 0) {
    return "Loading...";
  } else {
    const postList = posts.map(pl => (
      <Link key={pl.id} to={`/posts/${pl.id}`}>
        <div className="post">
          <span>{pl.text}</span>
          <img className="img" src={pl.image} alt="" />
          <hr />
        </div>
      </Link>
    ));
    return <div>{postList.reverse()}</div>;
    // <Link key={posts.id} to={`/post/${posts.id}`}>
    //   {posts.map(p => (
    //     <div className="post">
    //       <textarea
    //         className="edit-post"
    //         rows="8"
    //         cols="10"
    //         // placeholder=" add a post..."
    //         // value={editPost}
    //         // onChange={handleChange}
    //       >
    //         {p.text}
    //       </textarea>
    //       <img src={p.image} alt="" />
    //     </div>
    //   ))}
    // </Link>
  }
};

export default PostLinks;
