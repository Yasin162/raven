// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const PostContext = React.createContext();

// function PostProvider({ children }) {
//   const [posts, setPosts] = useState([]);
//   // const { id } = useParams();
//   useEffect(() => {
//     fetch(`/posts`)
//       .then(res => res.json())
//       .then(data => {
//         setPosts(data);
//         console.log(data);
//       });
//   }, []);

//   const addPost = data => {
//     const newPost = {
//       id: data.id,
//       text: data.text,
//       image: data.image,
//     };
//     setPosts([...posts, newPost]);
//   };
//   return (
//     <div>
//       <PostContext.Provider value={{ posts, addPost }}>
//         {children}
//       </PostContext.Provider>
//     </div>
//   );
// }

// export { PostContext, PostProvider };
