import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/User";
// import { PostProvider } from "./context/GlobalPost";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Post from "./Post";
import AddPost from "./AddPost";
// import ravenLogo from "./images/ravenlogo.png";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <UserProvider>
          <NavBar />
          {/* <img className="img-logo" src={ravenLogo} alt="" /> */}
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
    </div>
  );
}

export default App;
