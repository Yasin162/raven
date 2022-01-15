import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/User";
// import { PostProvider } from "./context/GlobalPost";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Post from "./Post";
import AddPost from "./AddPost";

function App() {
  return (
    <div className="container">
      {/* <PostProvider> */}
      <BrowserRouter>
        <UserProvider>
          <NavBar />
          <img className="logo-img" src="./images/ravenlogo" alt="" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/posts" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/addPost" element={<AddPost />} />
            <Route path="/posts/:id" element={<Post />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
      {/* </PostProvider> */}
    </div>
  );
}

export default App;
