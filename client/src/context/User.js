import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me")
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setErrors(data.error);
          setLoggedIn(false);
        } else {
          setUser(data);
          // console.log(data);
          setLoggedIn(true);
        }
      });
  }, []);

  useEffect(() => {
    fetch(`/posts`)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const login = user => {
    setUser(user);
    setLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  const signup = user => {
    setUser(user);
    setLoggedIn(true);
  };
  //   const updateNotes = data => {
  //     // console.log(data);
  //     const newNote = {
  //       text: data.text,
  //       updated_at: data.updated_at,
  //     };
  //     setNotes([...notes, newNote]);
  //   };
  const addPost = data => {
    const newPost = {
      author_id: data.author_id,
      id: data.id,
      text: data.text,
      image: data.image,
    };
    setPosts([...posts, newPost]);
  };

  const onSave = (newText, postId) => {
    fetch(`/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        text: newText,
        id: postId,
      }),
    })
      .then(res => res.json())
      .then(data => {
        const findPost = posts.find(p => p.id === postId);
        findPost.text = data.text;
        // setPosts([...notes, data]);
      });
  };

  const deletePost = postId => {
    fetch(`/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: postId,
      }),
    });
    const findPost = posts.find(p => p.id === postId);
    const newPosts = posts.filter(p => p.id !== findPost.id);
    setPosts(newPosts);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        // updateNotes,
        // notes,
        login,
        logout,
        signup,
        loggedIn,
        errors,
        posts,
        addPost,
        onSave,
        deletePost,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
