import React, { useContext } from "react";
// import Signup from "./Signup";
// import Login from "./Login";
import { UserContext } from "./context/User";
import PostLinks from "./PostLinks";
const Home = () => {
  const { loggedIn, user } = useContext(UserContext);
  // console.log(user.username);
  if (user === null) {
    return (
      <div>
        <h1 className="welcome">Welcome</h1>
        <PostLinks />
      </div>
    );
  } else if (!loggedIn) {
    return (
      <div>
        <h1 className="welcome">Welcome</h1>
        <PostLinks />
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="welcome">
          Welcome <br />
          {user.username.toUpperCase()}
        </h1>
        <PostLinks />
      </div>
    );
  }
};
export default Home;
