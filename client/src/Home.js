import React, { useContext } from "react";
// import Signup from "./Signup";
// import Login from "./Login";
import { UserContext } from "./context/User";
import PostLinks from "./PostLinks";
const Home = () => {
  const { loggedIn } = useContext(UserContext);
  if (!loggedIn) {
    return (
      <div>
        <PostLinks />
      </div>
    );
  } else {
    return (
      <div>
        <PostLinks />
      </div>
    );
  }
};
export default Home;
