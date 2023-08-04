import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
//import { useContext } from "react";
//import { UserContext } from "../context/UserContext";

const Navbar = () => {
  //console.log(useContext(UserContext));
  //console.log(useUserContext());

  const { user, setUser } = useUserContext();

  return (
    <nav>
      <NavLink to="/">Home</NavLink> |
      {user && (
        <>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <button onClick={() => setUser(false)}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
